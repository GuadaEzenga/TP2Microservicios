const Notification = require('../models/Notification');
const { sendMail } = require('../services/mailService');

exports.sendNotification = async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        await sendMail({ to: email, subject, text: message });

        // Guardar la notificación en MongoDB
        await Notification.create({
            userId: req.user.id,
            email,
            subject,
            message  // corregido de messageA a message
        });


        res.status(200).json({ msg: 'Correo enviado y notificación guardada' });
    } catch (err) {
        res.status(500).json({
            error: 'Error al enviar el correo',
            detail: err.message
        });
    }
};

exports.getAllNotifications = async (req, res) => {
    try {
        const notis = await Notification.find({ userId: req.user.id }).sort({ date: -1 });
        res.status(200).json(notis);
    } catch (err) {
        res.status(500).json({
            error: 'Error al obtener notificaciones',
            detail: err.message
        });
    }
};
