import React, { useState } from 'react';
import {  LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid';


function PasswordInput({ value, onChange, error, placeholder="Password", id="password" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleChange = (e) => {
    onChange(e.target.value);
    setIsWrong(false);
  };

  const handleBlur = () => {
    // This is a simple check. You might want to implement more complex validation.
    setIsWrong(value.length < 6);
  };

  return (
    <div>
    
      <div className="relative">
      <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <LockOpenIcon className={`h-5 w-5 ${isWrong ? 'text-red-500' : 'text-gray-400'}`} />
          ) : (
            <LockClosedIcon className={`h-5 w-5 ${isWrong ? 'text-red-500' : 'text-gray-400'}`} />
          )}
        </button>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full pl-8 p-2 border rounded ${
            error || isWrong ? 'border-red-500' : 'border-gray-300'
          }`}
        />
       
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default PasswordInput;