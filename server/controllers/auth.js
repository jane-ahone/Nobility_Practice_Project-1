const jwt = require('jsonwebtoken');
const { EmailPasswordUser } = require('../models/userModel');


const createTokenAndSendCookie = (res,id) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    console.log("user token",token)
    res.cookie('token', token, { httpOnly: true });
}


exports.registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingUser = await EmailPasswordUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new EmailPasswordUser({
      email,
      username,
      password
    });

    await newUser.save();

    createTokenAndSendCookie(res,newUser._id)

    res.status(201).json({ message: 'User registered successfully',data:newUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    console.log(error);
  }
}


exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await EmailPasswordUser.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      if (! await user.isPasswordMatch(password)) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      createTokenAndSendCookie(res,user._id)
  
      res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
};
  

exports.protect = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await EmailPasswordUser.findById(decoded.userId);
      if(!user) {
        return res.status(401).json({message: "user not found!"})
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token is not valid' });
    }
};
  



