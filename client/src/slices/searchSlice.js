import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    countries: [],
    categories: [],
    countrySelected: false,
    categorySelected: false,
    titleSelected: false,
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries.push(action.payload);
    },
    setCountrySelected: (state, action) => {
        state.countrySelected = action.payload;
    },
    setCategories: (state, action) => {
        state.categories = action.payload;
    },
    setCategorySelected: (state) => {
        state.categorySelected = !state.categoriescategorySelected;
    },
    setTitleSelected: (state) => {
        state.titleSelected = !state.titleSelected;
    }
  },
});

export const { setCountries, setCountrySelected, setCategories } = searchSlice.actions;
export default searchSlice.reducer;
