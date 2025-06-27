const mailer = require('../utils/mailer');

exports.sendEmail = async (to, subject, message) => {
  await mailer.send(to, subject, message);
};
