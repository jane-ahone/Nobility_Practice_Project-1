import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid'; 
import logo from "../../assets/Pics and icons/Icon.svg"

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isEmailTyping, setIsEmailTyping] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically make an API call to authenticate
      // For this example, we'll just set a token in localStorage
      localStorage.setItem('authToken', 'dummyToken');
      setIsLoggedIn(true);
    }
  };

  return (
<div className="flex flex-col items-center justify-center">
<img src={logo} alt="Logo" className="mb-3 w-20 h-20 " />
<form onSubmit={handleSubmit} className="space-y-4  w-full">
          
      <h2 className="text-xl  font-bold text-center text-[#373737] mb-4">Welcome to E-com </h2>
      <p className='mb-4 text-center text-gray-500 mt-0 text-sm'>sign in to get started</p>
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
         
      <button
        type="submit"
        className="w-full  bg-[#40bfff] text-white py-4 rounded hover:bg-blue-500 text-md font-bold" 
      >
        Log In
      </button>
    </form>
</div>
  );
}

export default Login;