const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
