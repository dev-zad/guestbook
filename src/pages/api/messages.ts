import { NextApiRequest, NextApiResponse } from 'next';
import { readMessages, writeMessages } from '@/lib/utilsInbox';

let messages: Array<{ id: number, email: string, username: string, name: string, leader: string, tribe: string, message: string }> = [];
let idCounter = 1;

// Load messages from the file system when the server starts
readMessages().then((loadedMessages) => {
  messages = loadedMessages;
  // Get the largest ID from the loaded messages to continue generating IDs
  if (messages.length > 0) {
    idCounter = Math.max(...messages.map(message => message.id)) + 1;
  }
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle POST requests
    const { email, username, name, leader, tribe, message } = req.body;
    const newMessage = { id: idCounter++, email, username, name, leader, tribe, message };
    messages.push(newMessage);
    // Write messages to the file system after each addition
    writeMessages(messages).catch((err) => {
      console.error('Error writing messages:', err);
    });
    return res.status(201).json(newMessage);
  } else if (req.method === 'GET') {
    // Handle GET requests
    const { id } = req.query;
    if (id) {
      // If an id parameter is provided, find the message with that id
      const messageId = parseInt(id as string, 10);
      const message = messages.find(message => message.id === messageId);
      if (message) {
        return res.status(200).json(message);
      } else {
        return res.status(404).json({ error: 'Message not found' });
      }
    } else {
      // If no id parameter is provided, return all messages
      return res.status(200).json(messages);
    }
  } else if (req.method === 'DELETE') {
    // Handle DELETE requests
    const { id } = req.query;
    const messageId = parseInt(id as string, 10);
    const index = messages.findIndex(message => message.id === messageId);
    if (index !== -1) {
      // Remove the message from the array
      messages.splice(index, 1);
      // Write updated messages to the file system
      writeMessages(messages).catch((err) => {
        console.error('Error writing messages:', err);
      });
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({ error: 'Message not found' });
    }
  } else {
    // Handle other HTTP methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
