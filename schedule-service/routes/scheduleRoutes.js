const express = require('express');
const router = express.Router();
const controller = require('../controllers/scheduleController');
const auth = require('../middleware/authMiddleware');

// Solo organizadores o admin pueden crear o eliminar agendas
router.post('/', auth(['organizador', 'admin']), controller.createSchedule);
router.get('/', controller.getSchedules);
router.delete('/:id', auth(['organizador', 'admin']), controller.deleteSchedule);

module.exports = router;
