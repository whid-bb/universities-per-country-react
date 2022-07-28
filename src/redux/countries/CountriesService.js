import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch('https://krajowarada.pl/countries-starter1.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return response;
});

const fetchCountriesDetails = createAsyncThunk('countries/fetchCountriesDetails', async (country) => {
  const response = await fetch(`https://countries.nowyumysl.pl/app/search?country=${country}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return response;
});

export { fetchCountriesDetails };

export default fetchCountries;
