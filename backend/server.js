const express = require('express');
const articles = require('./data/articles');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('/api/article/:id', (req, res) => {
  const article = articles.find((a) => a._id === req.params.id);
  res.json(article);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
