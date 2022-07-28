/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import countries from './countryB';
import { searchCountries } from '../../redux/countries/Countries';
import fetchCountries, { fetchCountriesDetails } from '../../redux/countries/CountriesService';

function CountrySearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (val) => {
    if (val === null) {
      dispatch(fetchCountries());
      navigate('/');
    } else {
      dispatch(searchCountries(val));
      dispatch(fetchCountriesDetails(val.name));
      navigate(`/country-details/${val.name}`);
    }
  };

  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      sx={{ width: '100%' }}
      onChange={(e, value) => handleClick(value)}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.abbr.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.abbr.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name}
          {' '}
          (
          {option.abbr}
          ) +
          {option.code}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}

export default CountrySearch;
