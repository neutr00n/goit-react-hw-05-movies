import { MoviesItem } from '../MoviesItem/MoviesItem';
import { List, Item } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ items, location }) => {
  return (
    <List>
      {items.map(({ id, original_title, vote_average, poster_path }) => (
        <Item key={id}>
          <MoviesItem
            id={id}
            title={original_title}
            poster={poster_path}
            raiting={vote_average}
            location={location}
          />
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
