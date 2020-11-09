import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleScreen = ({ match }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const { data } = await axios.get(`/api/article/${match.params.id}`);
      setArticle(data);
    };
    fetchArticle();
  }, [match]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleScreen;
