const asyncHandler = require('express-async-handler');
const Article = require('../models/articleModel');

// @desc  Fetch all articles
// @route  GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});
  res.json(articles);
});

// @desc  Fetch an article
// @route  GET /api/article/:id
// @access  Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc  Create an articles
// @route  POST /api/articles/
// @access  Private/Admin
const createArticle = asyncHandler(async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  const createdArticle = await article.save();
  res.status(201).json(createArticle);
});

module.exports = { getArticles, getArticleById, createArticle };
