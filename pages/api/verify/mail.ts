import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  require('dotenv').config();
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const attachmentPath = resolve('./public/vercel.svg');

  const mailData = {
    from: 'athmangauho77@gmail.com',
    to: 'athmangaucho11@gmail.com', // Change this to req.body.email if needed
    subject: `Message From Usman SnapFx`,
    attachments: [
      {
        filename: 'vercel.svg', // Set a desired filename
        path: attachmentPath,
      },
    ],
  };

  try {
    const info = await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err: any, info: unknown) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.status(200).json({ status: 'OK', info });
  } catch (error) {
    res.status(500).json({ status: 'Error' });
  }
}



