import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get('/api/articles');
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <h1>Recent Articles</h1>
      <Row >
        {articles &&
          articles.map((article) => (
            <Col key={article._id} sm={12} md={4} lg={4} xl={4}>
              <Article article={article} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
