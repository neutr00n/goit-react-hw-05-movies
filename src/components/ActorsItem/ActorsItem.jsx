import { Wrapper, Img, Box, Title, Character } from './ActorsItem.styled';
import PropTypes from 'prop-types';

export const ActorsItem = ({ photo, name, character }) => {
  const imgUrl = photo
    ? `https://image.tmdb.org/t/p/w200/${photo}`
    : 'http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png';

  return (
    <Wrapper>
      <Img src={imgUrl} alt={name} />

      <Box>
        <Title>{name}</Title>
        <Character>Character: {character}</Character>
      </Box>
    </Wrapper>
  );
};

ActorsItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
};
