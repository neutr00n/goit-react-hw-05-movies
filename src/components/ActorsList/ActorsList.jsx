import { ActorsItem } from '../ActorsItem/ActorsItem';
import { List, Item } from './ActorList.styled';
import PropTypes from 'prop-types';

export const ActorsList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <ActorsItem photo={profile_path} name={name} character={character} />
        </Item>
      ))}
    </List>
  );
};

ActorsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
