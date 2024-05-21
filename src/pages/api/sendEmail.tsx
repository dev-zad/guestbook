import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fromEmail, message, username } = req.body;

    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_ADMIN, // Use environment variables
          pass: process.env.EMAIL_PASS, // Use environment variables
        },
      });

      let mailOptions = {
        to: process.env.EMAIL_ADMIN, // Your fixed email
        subject: 'New message from your website',
        text: `From: ${fromEmail}\nMessage: ${message}\nName: ${username}`,
      };
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
