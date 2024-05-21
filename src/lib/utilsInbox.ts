// lib/utils.ts
"use client";
import fs from 'fs-extra';
import path from 'path';

// Define the path for storing messages
const messagesFilePath = path.join(process.cwd(), 'messages.json');

// Function to read messages from file
export const readMessages = async () => {
    try {
        const messages = await fs.readJSON(messagesFilePath);
        return messages;
    } catch (err: any) {
        // If the file doesn't exist, return an empty array
        if (err.code === 'ENOENT') {
            return [];
        }
        throw err;
    }
};

// Function to write messages to file
export const writeMessages = async (messages: any) => {
    await fs.writeJSON(messagesFilePath, messages);
};

