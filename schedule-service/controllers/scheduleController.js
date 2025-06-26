const Schedule = require('../models/Schedule');

// Validar conflicto de horarios
const hasConflict = async (room, startTime, endTime) => {
  return await Schedule.findOne({
    room,
    $or: [
      { startTime: { $lt: endTime, $gte: startTime } },
      { endTime: { $gt: startTime, $lte: endTime } },
      { startTime: { $lte: startTime }, endTime: { $gte: endTime } }
    ]
  });
};

exports.createSchedule = async (req, res) => {
  const { eventId, title, speakerId, room, startTime, endTime } = req.body;
  try {
    const conflict = await hasConflict(room, new Date(startTime), new Date(endTime));
    if (conflict) return res.status(409).json({ message: 'Conflicto de programación' });

    const schedule = new Schedule({ eventId, title, speakerId, room, startTime, endTime });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Error interno', error });
  }
};

exports.getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener agendas' });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: 'Agenda eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar' });
  }
};
