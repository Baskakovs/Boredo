import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    countries: [],
    categories: [],
    titles: [],
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
    setCategorySelected: (state, action) => {
        state.categorySelected = action.payload;
    },
    setTitles: (state, action) => {
        state.titles = action.payload;
    },
    setTitleSelected: (state, action) => {
        state.titleSelected = action.payload;
    }
  },
});

export const { setCountries, setCountrySelected, setCategories, setCategorySelected, setTitleSelected, setTitles } = searchSlice.actions;
export default searchSlice.reducer;
