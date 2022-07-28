import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import './DetailsList.scss';

function DetailsList({ name, webPages, animDelay }) {
  const [show, setShow] = useState('');

  useEffect(() => {
    setShow('showList');
  }, []);

  return (
    <ul className={`details-list ${show}`}>
      <li
        className="details-item"
        style={{ animationDelay: `${animDelay}ms` }}
      >
        <p className="u-name">
          <SchoolIcon />
          {name}
        </p>
        <p className="u-link">
          <LinkIcon />
          <a target="_blank" rel="noreferrer" href={webPages}>{webPages}</a>
        </p>
      </li>
    </ul>
  );
}

DetailsList.propTypes = {
  name: PropTypes.string.isRequired,
  webPages: PropTypes.string.isRequired,
  animDelay: PropTypes.number.isRequired,
};

export default DetailsList;
