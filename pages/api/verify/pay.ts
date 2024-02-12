// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '../../utils/nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    await sendEmail(to, subject, text);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
