import React from 'react';
import { Card } from 'react-bootstrap';

const Article = ({ article }) => {
  return (
    <>
      <Card className='m-3 text-center'>
        <Card.Body>
          <a href={`/article/${article._id}`}>
            <Card.Title as='div'>
              <div className='my-3'>{article.title}</div>
            </Card.Title>
          </a>
          <Card.Text as='div'>
            <div className='my-3'>{article.content}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Article;
