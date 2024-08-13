const {User} = require('../models/userModel')

exports.getMe = (req,res,next)=>{
    res.status(200).json({
        user: req.user
    })
}

// Update Address
exports.updateAddress = async (req, res) => {
    const { street, city, state, zipCode, country } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id, 
        { address: { street, city, state, zipCode, country } },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Address updated successfully', address: updatedUser.address });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Remove Address
  exports.deleteAddress = async (req, res) => {
    try {
      
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        { address: null },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Address removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

exports.updateProfile = async (req, res) => {
    const { phone, dateOfBirth, photo } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user._id,
        { phone, dateOfBirth, photo },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };