// rootReducer.js
import { combineReducers } from 'redux'
import searchReducer from './slices/searchSlice'
import feedReducer from './slices/feedSlice'
import commentReducer from './slices/commentSlice';
import loginSlice from './slices/loginSlice'
import writeSlice from './slices/writeSlice'
import settingsSlice from './slices/settingsSlice'
import editSlice from './slices/editSlice'
import furtherSlice from './slices/furtherSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  feed: feedReducer,
  comments: commentReducer,
  login: loginSlice,
  write: writeSlice,
  settings: settingsSlice,
  edit: editSlice,
  further: furtherSlice
});

export default rootReducer;