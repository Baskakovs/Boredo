// rootReducer.js
import { combineReducers } from 'redux';
import searchReducer from './slices/searchSlice';
import feedReducer from './slices/feedSlice';
import commentReducer from './slices/commentSlice';
import loginSlice from './slices/loginSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  feed: feedReducer,
  comments: commentReducer,
  login: loginSlice,
});

export default rootReducer;