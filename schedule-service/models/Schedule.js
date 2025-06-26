const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  title: { type: String, required: true },
  speakerId: { type: String, required: true },
  room: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
