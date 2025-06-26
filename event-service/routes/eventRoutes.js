const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController');
const auth = require('../middlewares/authMiddleware');

router.use(auth); // protege todas las rutas

router.get('/', controller.getEvents);
router.post('/', controller.createEvent);
router.get('/:id', controller.getEventById);
router.put('/:id', controller.updateEvent);
router.delete('/:id', controller.deleteEvent);

module.exports = router;
