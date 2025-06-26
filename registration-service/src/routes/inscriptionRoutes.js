const express = require('express');
const router = express.Router();
const Inscription = require('../models/Inscription');
const QRCode = require('qrcode');
const authenticateJWT = require('../middlewares/authMiddleware');

// Crear inscripción
router.post('/', authenticateJWT, async (req, res) => {
  const { eventId, registrationType, price } = req.body;
  const participantId = req.user.id;

  try {
    const qrData = `event:${eventId}|user:${participantId}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const newInscription = new Inscription({
      participantId,
      eventId,
      registrationType,
      price,
      qrCode
    });

    await newInscription.save();
    res.status(201).json(newInscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ver inscripciones de un usuario
router.get('/', authenticateJWT, async (req, res) => {
  const participantId = req.user.id;
  const ins = await Inscription.find({ participantId });
  res.json(ins);
});

// Eliminar inscripción
router.delete('/:id', authenticateJWT, async (req, res) => {
  const id = req.params.id;
  await Inscription.findByIdAndDelete(id);
  res.sendStatus(204);
});

module.exports = router;