import React from 'react';
import Article from '../components/Article';
import articles from '../articles';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <h1>Recent Articles</h1>
      <Row className='justify-content-center'>
        {articles.map((article) => (
          <Col key={article._id} sm={12} md={8} lg={8} xl={8}>
            <Article article={article} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
