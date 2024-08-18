import React, { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid'; 
import PasswordInput from './PasswordInput';
import logo from "../../assets/Pics and icons/Icon.svg"


function Signup({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isNameTyping, setIsNameTyping] = useState(false); // For name input icon color
  const [isEmailTyping, setIsEmailTyping] = useState(false); // For email input icon color

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to register the user
      // For this example, we'll just set a token in localStorage
      localStorage.setItem('authToken', 'dummyToken');
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="mb-3 w-20 h-20 " />
    <form onSubmit={handleSubmit} className="space-y-4 w-full ">

      <h2 className="text-xl font-bold text-center mb-1 pb-0 text-[#373737]">Let's get started</h2>
      <p className='mb-4 text-center text-gray-500 mt-0 text-sm'>Create a new account</p>
      
      {/* Name Input */}
      <div className="relative">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsNameTyping(true);
          }}
          onFocus={() => setIsNameTyping(true)}
          onBlur={() => setIsNameTyping(name.length > 0)}
          placeholder='Full name'
          className={`w-full pl-8 p-2 border rounded ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <UserIcon
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
            isNameTyping ? 'text-blue-500' : 'text-gray-400'
          }`}
        />
    
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div className="relative">
        <EnvelopeIcon
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
            isEmailTyping ? 'text-blue-500' : 'text-gray-400'
          }`}
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailTyping(true);
          }}
          onFocus={() => setIsEmailTyping(true)}
          onBlur={() => setIsEmailTyping(email.length > 0)}
          placeholder='Email'
          className={`w-full pl-8 p-2 border rounded ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password Inputs */}
      <PasswordInput
        value={password}
        onChange={setPassword}
        error={errors.password}
        id='password'
      />
      <PasswordInput
        value={confirmPassword}
        onChange={setConfirmPassword}
        error={errors.password}
        placeholder='Password Again'
        id='password-again'
      />
      
      <button
        type="submit"
        className="w-full bg-[#40bfff] text-white py-4 rounded hover:bg-blue-500 text-md font-bold"
      >
        Sign Up
      </button>
    </form>
    </div> 

  
  );
}

export default Signup;
