"use client";
import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  email: string;
  username: string;
  message: string;
}

const MessageInbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Message Inbox</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map(message => (
            <li key={message.id} className="p-4 border rounded-lg shadow-sm">
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Username:</strong> {message.username}</p>
              <p><strong>Message:</strong> {message.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageInbox;
