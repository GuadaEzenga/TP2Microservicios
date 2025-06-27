const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { verifyToken } = require('../middleware/authMiddleware');

// POST: enviar y guardar
router.post('/send', verifyToken, notificationController.sendNotification);

// GET: obtener todas
router.get('/', verifyToken, notificationController.getAllNotifications);

router.get('/mine', verifyToken, notificationController.getMyNotifications);

module.exports = router;
