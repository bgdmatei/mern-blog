import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateArticle } from '../actions/articleActions';
import { ARTICLE_UPDATE_RESET} from '../constants/articleConstants';

const UpdateArticle = ({ match, history }) => {
  const articleId = match.params.id
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const dispatch = useDispatch();

  const articleUpdate = useSelector((state) => state.articleUpdate)
  const {success: successUpdate} = articleUpdate

  useEffect(() => {
    if(successUpdate) {
      dispatch({type: ARTICLE_UPDATE_RESET});
      history.push(`/`);
    }
  }, [dispatch, history, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateArticle({
        _id: articleId,
        title,
        content,
      })
    );
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
          ></Form.Control>
          <Form.Label>Article Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button className='my-2' variant='secondary' type='submit'>
            Update
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default UpdateArticle;
