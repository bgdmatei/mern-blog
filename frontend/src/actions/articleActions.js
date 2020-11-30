import axios from 'axios';
import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
} from '../constants/articleConstants';

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });

    const { data } = await axios.get('/api/articles');

    dispatch({
      type: ARTICLE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createArticle = (title, content) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_CREATE_REQUEST });

    const { data } = await axios.post('/api/articles/', { title, content });

    dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
