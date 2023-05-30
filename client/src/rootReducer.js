// rootReducer.js
import { combineReducers } from 'redux';
import searchReducer from './slices/searchSlice';
import feedReducer from './slices/feedSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  feed: feedReducer,
});

export default rootReducer;