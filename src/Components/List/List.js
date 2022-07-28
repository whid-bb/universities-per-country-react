import { useSelector } from 'react-redux';

import ListItem from './ListItem/ListItem';
import './List.scss';

function List() {
  const { data } = useSelector((state) => state.countries);
  return (
    <div>
      <ListItem country={data} />
    </div>
  );
}

export default List;
