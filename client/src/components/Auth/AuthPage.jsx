import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function AuthPage({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full max-w-md mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {isLogin ? (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Signup setIsLoggedIn={setIsLoggedIn} />
          )}
          <p className="mt-4 text-center text-gray-400 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#40bfff] hover:underline font-bold"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;