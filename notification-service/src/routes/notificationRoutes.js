const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const notificationController = require('../controllers/notificationController');

console.log(typeof notificationController.sendNotification);  // debe mostrar 'function'
console.log(typeof notificationController.getAllNotifications);  // debe mostrar 'function'

router.post('/send', authMiddleware, notificationController.sendNotification);
router.get('/mine', authMiddleware, notificationController.getAllNotifications);

module.exports = router;
