require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/schedules', scheduleRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Schedule Service running on port ${PORT}`));
