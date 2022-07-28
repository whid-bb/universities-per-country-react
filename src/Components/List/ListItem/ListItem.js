/* eslint-disable max-len, no-unused-vars */
import { Link, useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { searchCountries } from '../../../redux/countries/Countries';
import fetchCountries, { fetchCountriesDetails } from '../../../redux/countries/CountriesService';
import './ListItem.scss';

function ListItem({ country }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesDetails());
  }, []);

  const match = useMatch('/country-details/:country');
  const handleClick = (e) => {
    dispatch(searchCountries(e));
  };

  const getHome = () => {
    dispatch(fetchCountries());
  };

  const groupItems = () => country.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([{ ...key, ...{ id: index } }])
    : rows[rows.length - 1].push({ ...key, ...{ id: index } })) && rows, []);

  return (
    <>
      <div className="country-list-container">
        {groupItems().map((el) => (
          <div className="row" key={`${el[0].id}`}>
            {match && (
              <Link
                to="/"
                onClick={() => getHome()}
                className="go-back-ico"
              >
                <ArrowBackIosIcon />
              </Link>
            )}
            {el.map((el) => (
              <Link key={el.id} onClick={() => handleClick(el)} className="country-list-link" to={`/country-details/${el.name}`}>
                <div className="country-list-item">
                  <div className="cli-top">

                    <img src={`https://countryflagsapi.com/png/${el.abbr}`} alt={el.name} />
                    {!match && <ArrowCircleRightOutlinedIcon />}
                  </div>
                  <div className="cli-data">
                    <p>
                      {el.name}
                    </p>
                    <p>{el.length}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

// ListItem.propTypes = {
//   country: PropTypes.shape({
//     reduce: PropTypes.func.isRequired,
//   }).isRequired,
// };
ListItem.propTypes = {
  country: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ListItem;
