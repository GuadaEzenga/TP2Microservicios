const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  capacity: Number,
  state: {
    type: String,
    enum: ['planificado', 'activo', 'finalizado'],
    default: 'planificado'
  },
  createdBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
