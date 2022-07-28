/* eslint-disable camelcase */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountriesDetails } from '../../redux/countries/CountriesService';
import { searchCountries } from '../../redux/countries/Countries';
import DetailsList from './DetailsList';
import './Details.scss';

function Details() {
  const { details } = useSelector((state) => state.countries);
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCountries({ name: country }));
    dispatch(fetchCountriesDetails(country));
  }, []);

  return (
    <>
      <div className="details-header">
        <span>
          Universities:
        </span>
        {details.length}
      </div>
      {details.map(({ name, web_pages }, i) => (
        <DetailsList key={name} animDelay={i * 100} name={name} webPages={web_pages[0]} />
      ))}
    </>
  );
}

export default Details;
