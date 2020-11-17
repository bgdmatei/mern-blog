const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Article = require('../models/articleModel');

// @desc  Fetch all articles
// @route  GET /api/articles
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const articles = await Article.find({});
    res.json(articles);
  })
);

// @desc  Fetch an article
// @route  GET /api/article/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);

    if (article) {
      res.json(article);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

module.exports = router;
