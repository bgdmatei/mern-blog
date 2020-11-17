const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const articleRoutes = require('../backend/routes/articleRoutes');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
