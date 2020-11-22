import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            size='lg'
            type='text'
            value={title}
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Article Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button className='my-2' variant='secondary' type='submit'>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateArticle;
