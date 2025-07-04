const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['asistente', 'organizador', 'expositor'], default: 'asistente' },
  totpSecret: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);