const express = require('express');
const path = require('path')
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const articleRoutes = require('./routes/articleRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(express.json());

app.use('/api/articles', articleRoutes);
app.use('/api/upload', uploadRoutes)

const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
