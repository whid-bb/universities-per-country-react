import { Outlet, Link, useMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import List from '../List/List';
import CountrySearch from './CountrySearch';
import fetchCountries from '../../redux/countries/CountriesService';
import './Home.scss';

function Home() {
  const dispatch = useDispatch();

  const getHome = () => {
    dispatch(fetchCountries());
  };

  const match = useMatch('/');

  useEffect(() => {
    if (match !== null) dispatch(fetchCountries());
  }, []);
  return (
    <div>
      <div className="top-bar">
        <Link className="home-link" onClick={() => getHome()} to="/">
          <HomeIcon />
        </Link>
        <div>

          <KeyboardVoiceIcon />
          <SettingsIcon />
        </div>
      </div>
      <header className="top-header">
        <h2>Universities per country</h2>
        <div className="search-container">
          <CountrySearch />
        </div>
      </header>
      <List />
      <Outlet />
    </div>
  );
}

export default Home;
