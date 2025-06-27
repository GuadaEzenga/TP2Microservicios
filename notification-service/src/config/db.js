const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🔗 Conectado a la base de datos de Notificaciones');
  } catch (error) {
    console.error('❌ Error al conectar la base de datos:', error.message);
    process.exit(1); // Finaliza la app si falla la conexión
  }
};

module.exports = connectDB;
