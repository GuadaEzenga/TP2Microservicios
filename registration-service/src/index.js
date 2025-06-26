const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Rutas
const inscriptionRoutes = require('./routes/inscriptionRoutes');
app.use('/api/inscriptions', inscriptionRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Registration Service running on port ${PORT}`));
