const express = require('express');
const path = require('path')
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const articleRoutes = require('../backend/routes/articleRoutes');
const uploadRoutes = require('../backend/routes/uploadRoutes');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(express.json());

app.use('/api/articles', articleRoutes);
app.use('/api/upload', uploadRoutes)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
