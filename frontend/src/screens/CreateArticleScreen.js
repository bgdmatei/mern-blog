import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createArticle } from '../actions/articleActions';

const CreateArticle = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(createArticle(title, content, image));
    history.push('/');
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            value={title}
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
          </Form.Group>

          <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={content}
            placeholder='Write your thoughts...'
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
              <Form.File className="my-2" id='image-file' label='Choose File' custom onChange={uploadFileHandler}/>
              {uploading && <div>Image uploading...</div>}
          </Form.Group>
          
          <Button className='my-2' variant='secondary' type='submit'>
            Submit
          </Button>
       
      </Form>
    </>
  );
};

export default CreateArticle;
