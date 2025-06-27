const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NOTIF_EMAIL,
    pass: process.env.NOTIF_PASSWORD,
  },
});

exports.send = async (to, subject, text) => {
  const mailOptions = {
    from: `"Event System" <${process.env.NOTIF_EMAIL}>`,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
