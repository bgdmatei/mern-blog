const express = require('express');
const articles = require('./data/articles');

const app = express();

app.listen(5000, console.log('Server running on port 5000'));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find((a) => a._id === req.params.id);
  res.json(article);
});
