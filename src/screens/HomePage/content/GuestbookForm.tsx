// components/GuestbookForm.tsx
"use client";
import { useState } from 'react';

const GuestbookForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add code to submit the message to Firebase Firestore
    // Clear input fields after submission
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-2"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Leave your message here"
        rows={4}
        className="w-full py-2 px-3 border border-gray-300 rounded-md mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default GuestbookForm;
