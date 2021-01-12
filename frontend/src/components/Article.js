import React from 'react';
import ReadMore from '../utils/ReadMore';
import { LinkContainer } from 'react-router-bootstrap';
import { Card } from 'react-bootstrap';

const Article = ({ article }) => {
  return (
    <>
      <Card className='m-3 text-center'>
        <a href={`/article/${article._id}`}>
          {article.image && <Card.Img variant='top' src={`${article.image}`} />}
          <Card.Body>
            <Card.Title as='div'>
              <div className='my-3'>{article.title}</div>
            </Card.Title>
            <Card.Text as='div'>
              {`${ReadMore(article.content.substring(0, 150))} `}
              {article.content.length > 100 ? (
                <span>
                  <LinkContainer
                    style={{ color: '#007bff', cursor: 'pointer' }}
                    to={`/article/${article._id}`}
                  >
                    <p> ...Read More</p>
                  </LinkContainer>
                </span>
              ) : (
                ''
              )}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </>
  );
};

export default Article;
