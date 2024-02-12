import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';
import nodemailer from 'nodemailer';

// Extend the NextApiRequest interface to include the body property
interface CustomNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    fullName: string;
    phone: string;
    message: string;
  };
}

export default async function handler(req: CustomNextApiRequest, res: NextApiResponse) {
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const attachmentPath = resolve('./public/vercel.svg');

  const mailData = {
    from: "athmangauho77@gmail.com",
    to: req.body.email,
    subject: `Message From Usman SnapFx`,
    html: `
      <div><strong>Name:</strong> ${req.body.fullName}</div>
      <br/>
      <div><strong>Email:</strong> ${req.body.email}</div>
      <br/>
      <div><strong>Phone:</strong> ${req.body.phone}</div>
      <br/>
      <div><strong>Message:</strong> ${req.body.message}</div>
      <br/>
      <p>Sent from: ${req.body.email}</p>`,
    attachments: [
      {
        filename: 'vercel.svg', // Set a desired filename
        path: attachmentPath,
      },
    ],
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log(info);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Error", error: error.message });
  }
}
