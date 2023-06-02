// rootReducer.js
import { combineReducers } from 'redux';
import searchReducer from './slices/searchSlice';
import feedReducer from './slices/feedSlice';
import commentReducer from './slices/commentSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  feed: feedReducer,
  comments: commentReducer,
});

export default rootReducer;