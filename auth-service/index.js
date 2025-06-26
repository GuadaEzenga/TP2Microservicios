const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authroutes');
require('dotenv').config();
const connectDB = require('./data/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
