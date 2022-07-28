import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './countries/Countries';

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;
