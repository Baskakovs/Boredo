import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    country: [],
  },
  reducers: {
    setCountry: (state, action) => {
      state.country.push(action.payload);
    },
  },
});

export const { setCountry } = searchSlice.actions;
export default searchSlice.reducer;


