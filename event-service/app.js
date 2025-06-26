require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () =>
      console.log(`Event Service running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error('MongoDB error:', err));
