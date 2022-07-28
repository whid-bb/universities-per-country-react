import { createSlice } from '@reduxjs/toolkit';
import fetchCountries, { fetchCountriesDetails } from './CountriesService';
import countries from '../../Components/Home/countryB';
/* eslint-disable no-param-reassign */

const initialState = {
  loaded: false,
  data: [],
  details: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {

    searchCountries: (state, action) => {
      const { payload: { name } } = action;
      const newState = countries.filter((country) => {
        if (country.name === name) {
          return country;
        }
        return null;
      });
      return { ...state, data: [...newState] };
    },
  },
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      const countriesObj = Object.entries(action.payload).map((el) => {
        const obj = {
          abbr: el[0],
          name: el[1].name,
          length: el[1].length,
        };

        return obj;
      });

      return { ...state, data: countriesObj, loaded: true };
    },
    [fetchCountriesDetails.fulfilled]: (state, action) => (

      { ...state, details: [...action.payload] }
    ),
  },
});

export const { searchCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
