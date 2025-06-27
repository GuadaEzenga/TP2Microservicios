const notificationService = require('../services/notificationService');
const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await notificationService.sendEmail(to, subject, message);

    // Guardar en MongoDB
    const saved = new Notification({ to, subject, message });
    await saved.save();

    res.status(200).json({ success: true, message: 'Notificación enviada y guardada' });
  } catch (err) {
    res.status(500).json({ error: 'Error al enviar notificación', details: err.message });
  }
};

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ sentAt: -1 });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener notificaciones' });
  }
};

exports.getMyNotifications = async (req, res) => {
  try {
    const userEmail = req.user.email;

    const Notification = require('../models/Notification');
    const notifications = await Notification.find({ to: userEmail }).sort({ sentAt: -1 });

    res.status(200).json(notifications);
  } catch (err) {
    console.error('❌ Error al obtener tus notificaciones:', err);
    res.status(500).json({ error: 'Error al obtener tus notificaciones' });
  }
};
