const asyncHandler = require('express-async-handler');
const Article = require('../models/articleModel');

// @desc  Fetch all articles
// @route  GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({}).sort({ _id: -1 });
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
    image: req.body.image,
  });

  const createdArticle = await article.save();
  res.status(201).json(createdArticle);
});

// @desc  Update an articles
// @route  PUT /api/articles/:id
// @access  Private/Admin
const updateArticle = asyncHandler(async (req, res) => {
  const { title, content, image } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    article.title = title;
    article.content = content;
    article.image = image;

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error('Article not found');
  }
});

module.exports = { getArticles, getArticleById, createArticle, updateArticle };
