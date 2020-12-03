import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const ArticleScreen = ({ match }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const { data } = await axios.get(`/api/articles/${match.params.id}`);

      setArticle(data);
    };
    fetchArticle();
  }, [match]);

  return (
    <>
      <Card>
        <Card.Header style={{ fontSize: '32px' }}>{article.title}</Card.Header>
        <Card.Body style={{ fontSize: '16px' }}>
          <blockquote className='blockquote mb-0'>
            <p>{article.content}</p>
          </blockquote>
        </Card.Body>
      </Card>
      <LinkContainer to='/' className='my-3' activeClassName=''>
        <Button variant='outline-secondary'>Go Back</Button>
      </LinkContainer>
      <LinkContainer
        to={`/article/${article._id}/edit`}
        className='my-3'
        activeClassName=''
      >
        <Button variant='outline-secondary'>Edit</Button>
      </LinkContainer>
    </>
  );
};

export default ArticleScreen;
