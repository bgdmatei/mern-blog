import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateArticle, listArticleDetails } from '../actions/articleActions';
import { ARTICLE_UPDATE_RESET} from '../constants/articleConstants';

const UpdateArticle = ({ match, history }) => {
  const articleId = match.params.id
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false);
  
  const dispatch = useDispatch();

  const articleUpdate = useSelector((state) => state.articleUpdate)
  const {success: successUpdate} = articleUpdate

  const articleDetails = useSelector((state) => state.articleDetails)
  const {article} = articleDetails

  useEffect(() => {
    if(successUpdate) {
      dispatch({type: ARTICLE_UPDATE_RESET});
      history.push(`/`);
    } else {
      if(!article.title || article._id !== articleId) {
        dispatch(listArticleDetails(articleId))
      } else {
        setTitle(article.title)
        setContent(article.content)
        setImage(article.image)
      }
    }
  }, [dispatch, history, successUpdate, article, articleId])

  
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const { data } = await axios.post('/api/upload', formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateArticle({
        _id: articleId,
        title,
        image,
        content,
      })
    );
  };

  return (
    <> 
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='title'> 
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            size='lg'
            type='text'
            value={title}
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          />
          </Form.Group>

          <Form.Group controlId='content'>
            <Form.Label>Article Content</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control 
              type='text'
              placeholder='Enter image url'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              />
              <Form.File id='image-file' label='Choose File' custom onChange={uploadFileHandler}/>
              {uploading && <div>Image uploading...</div>}
          </Form.Group>

          <Button className='my-2' variant='secondary' type='submit'>
            Update
          </Button>
      </Form>
    </>
  );
};

export default UpdateArticle;
