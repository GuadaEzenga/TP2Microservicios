const mongoose = require('mongoose');

const InscriptionSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  registrationType: { type: String, enum: ['standard', 'vip', 'student'], required: true },
  price: { type: Number, required: true },
  qrCode: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inscription', InscriptionSchema);
