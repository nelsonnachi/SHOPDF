import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Main Container */}
      <div className="relative w-full max-w-200 min-h-137.5 md:min-h-125 bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Sign Up Form */}
        <div className={`absolute top-0 h-full w-full md:w-1/2 transition-all duration-700 ease-in-out z-20 ${
          isSignUp 
            ? 'translate-x-0 md:translate-x-full opacity-100' 
            : '-translate-x-full opacity-0 md:opacity-100'
        }`}>
          <form className="flex flex-col items-center justify-center h-full px-8 md:px-10 text-center bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Create Account</h1>
            <input type="text" placeholder="Name" className="w-full bg-gray-100 my-2 p-3 rounded-lg outline-none" required />
            <input type="email" placeholder="Email" className="w-full bg-gray-100 my-2 p-3 rounded-lg outline-none" required />
            <input type="password" placeholder="Password" className="w-full bg-gray-100 my-2 p-3 rounded-lg outline-none" required />
            <button className="mt-4 bg-indigo-600 text-white py-3 px-12 rounded-lg font-semibold uppercase hover:bg-indigo-700 transition w-full md:w-auto">
              Sign Up
            </button>
            <p className="mt-6 md:hidden text-sm text-gray-600">
              Already have an account?{' '}
              <button type="button" onClick={toggleForm} className="text-indigo-600 font-bold">Sign In</button>
            </p>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`absolute top-0 h-full w-full md:w-1/2 transition-all duration-700 ease-in-out z-10 ${
          isSignUp 
            ? 'translate-x-full opacity-0 md:opacity-100 md:translate-x-0' 
            : 'translate-x-0 opacity-100'
        }`}>
          <form className="flex flex-col items-center justify-center h-full px-8 md:px-10 text-center bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Sign In</h1>
            <input type="email" placeholder="Email" className="w-full bg-gray-100 my-2 p-3 rounded-lg outline-none" required />
            <input type="password" placeholder="Password" className="w-full bg-gray-100 my-2 p-3 rounded-lg outline-none" required />
            <a href="#" className="text-sm text-gray-400 my-3">Forgot your password?</a>
            <button className="bg-indigo-600 text-white py-3 px-12 rounded-lg font-semibold uppercase hover:bg-indigo-700 transition w-full md:w-auto">
              Sign In
            </button>
            <p className="mt-6 md:hidden text-sm text-gray-600">
              New here?{' '}
              <button type="button" onClick={toggleForm} className="text-indigo-600 font-bold">Create Account</button>
            </p>
          </form>
        </div>

        {/* Desktop Sliding Overlay (Hidden on Mobile) */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-50 hidden md:block ${
          isSignUp ? '-translate-x-full rounded-r-[100px]' : 'rounded-l-[100px]'
        }`}>
          <div className={`relative bg-indigo-600 text-white h-full w-[200%] -left-full transition-all duration-700 ease-in-out ${
            isSignUp ? 'translate-x-1/2' : 'translate-x-0'
          }`}>
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0">
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-8 text-sm">Enter your details to login</p>
              <button onClick={toggleForm} className="border border-white py-2 px-10 rounded-lg font-semibold uppercase hover:bg-white hover:text-indigo-600 transition">
                Sign In
              </button>
            </div>
            <div className="absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 right-0">
              <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
              <p className="mb-8 text-sm">Register to start your journey</p>
              <button onClick={toggleForm} className="border border-white py-2 px-10 rounded-lg font-semibold uppercase hover:bg-white hover:text-indigo-600 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
