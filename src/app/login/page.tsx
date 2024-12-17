"use client";

import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">YOUR ACCOUNT <br />FOR EVERYTHING <br />NIKE</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <div>
          <label className='gap-2 text-gray-500 py-2'>
            <input type="checkbox"/>
            Keep me signed in <br />
            </label>
            <a href="#" className='forgot-password gap-3 text-gray-500 py-2'>Forgotten your Password?</a>
        </div>
        <p className='text-gray-500 text-center py-4'>By logging in, you agree to Nike&apos;s Privacy Policy and Terms of Use.</p>
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white rounded hover:bg-blue-600"
        >
          SignIn
        </button>
        <p className='text-gray-500 py-4 text-center'>Not a Member? </p>
        <p className='underline text-center'>Join Us</p>
      </div>
    </div>
  );
};

export default LogIn;
