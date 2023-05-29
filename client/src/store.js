import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
const store = configureStore({
    reducer: searchReducer,
});

export default store