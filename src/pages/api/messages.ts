"use client";
import { NextApiRequest, NextApiResponse } from 'next';
import { readMessages, writeMessages } from '@/lib/utilsInbox';

let messages: Array<{ id: number, email: string, username: string, message: string }> = [];
let idCounter = 1;

// Pag-load ng mga mensahe mula sa file system sa pag-umpisa ng server
readMessages().then((loadedMessages) => {
  messages = loadedMessages;
  // Pagkuha ng pinakamalaking ID sa mga na-load na mensahe upang ituloy ang paggawa ng ID
  if (messages.length > 0) {
    idCounter = Math.max(...messages.map(message => message.id)) + 1;
  }
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, username, message } = req.body;
    const newMessage = { id: idCounter++, email, username, message };
    messages.push(newMessage);
    // Isulat ang mga mensahe sa file system pagkatapos ng bawat pagdagdag
    writeMessages(messages).catch((err) => {
      console.error('Error writing messages:', err);
    });
    return res.status(201).json(newMessage);
  } else if (req.method === 'GET') {
    return res.status(200).json(messages);
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
