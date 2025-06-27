const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const notificationRoutes = require('../src/routes/notificationRoutes');
const connectDB = require('../src/config/db');
connectDB();




const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB conectada'))
  .catch(err => console.error(err));

app.use('/api/notifications', notificationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Notification Service corriendo en el puerto ${process.env.PORT}`);
});
