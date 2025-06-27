const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendMail = async ({ to, subject, text }) => {
  const mailOptions = {
    from: `"Sistema de Conferencias" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
};
