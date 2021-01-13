import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  articleListReducer,
  articleCreateReducer,
  articleUpdateReducer,
  articleDetailsReducer
} from './reducers/articleReducers';

const reducer = combineReducers({
  articleList: articleListReducer,
  articleCreate: articleCreateReducer,
  articleUpdate: articleUpdateReducer,
  articleDetails: articleDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
