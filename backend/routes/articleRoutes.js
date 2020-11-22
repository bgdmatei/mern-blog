const express = require('express');
const {
  getArticles,
  getArticleById,
  createArticle,
} = require('../controllers/articleController');
const router = express.Router();

router.route('/').get(getArticles).post(createArticle);
router.route('/:id').get(getArticleById);

module.exports = router;
