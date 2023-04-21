import {
  NavigLink,
  Box,
  Title,
  Raiting,
  RaitingDesrip,
  Img,
} from './MoviesItem.styled';
import PropTypes from 'prop-types';

export const MoviesItem = ({ id, title, raiting, poster, location }) => {
  const imgUrl = poster
    ? `https://image.tmdb.org/t/p/w300/${poster}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';

  return (
    <NavigLink to={`/movies/${id}`} state={{ from: location }}>
      <Img src={imgUrl} alt={`${title} poster`} />
      <Box>
        <Title>{title}</Title>
        <div>
          <Raiting>Raiting:</Raiting>
          <RaitingDesrip>{raiting.toFixed(2)}</RaitingDesrip>
        </div>
      </Box>
    </NavigLink>
  );
};

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
  poster: PropTypes.string,
  location: PropTypes.object.isRequired,
};
