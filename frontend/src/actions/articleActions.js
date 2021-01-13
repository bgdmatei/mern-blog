import axios from 'axios';
import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_DETAILS_REQUEST,
  ARTICLE_LIST_DETAILS_SUCCESS,
  ARTICLE_LIST_DETAILS_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_UPDATE_REQUEST,
  ARTICLE_UPDATE_SUCCESS,
  ARTICLE_UPDATE_FAIL,

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

export const listArticleDetails = (id) => async (dispatch) => {
  try {
    dispatch({type: ARTICLE_LIST_DETAILS_REQUEST})

    const {data} = await axios.get(`/api/articles/${id}`)

    dispatch({
      type: ARTICLE_LIST_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export const createArticle = (title, content, image) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/articles/', { title, content, image }, config);

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

export const updateArticle = (article) => async (dispatch) => {
  try {
    dispatch({
      type: ARTICLE_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/articles/${article._id}`,
      article,
      config
    );

    dispatch({
      type: ARTICLE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
