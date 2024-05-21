"use client";
import React, { useState } from 'react';

export function LogInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Hardcoded username and password
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // If the submitted username and password match the hardcoded values,
      // "authenticate" the user and store their data in local storage
      const userData = {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
        role: 'admin',
      };

      localStorage.setItem('user', JSON.stringify(userData));

      // Redirect to the inbox page
      window.location.href = '/inbox-page';
    } else {
      // If the submitted username and password do not match the hardcoded values,
      // log an error
      console.error('Failed to log in');
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-gray-100 rounded-lg p-8 shadow-md">
        <label className="mb-4">
          <span className="block mb-2">Username:</span>
          <input
            className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label className="mb-4">
          <span className="block mb-2">Password:</span>
          <input
            className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </div>
    </form>

  );
}

