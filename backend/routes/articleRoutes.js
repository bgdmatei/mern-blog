const express = require('express');
const {
  getArticles,
  getArticleById,
  createArticle,
} = require('../controllers/articleController');
const router = express.Router();

router.route('/').get(getArticles);
router.route('/:id').get(getArticleById);
router.route('/new').post(createArticle);

module.exports = router;
