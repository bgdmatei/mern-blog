const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    image: String,
    title: {
      type: String,
      required: true,
    },
    content: String,
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
