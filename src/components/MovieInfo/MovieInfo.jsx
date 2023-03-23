import {
  Box,
  Poster,
  FilmInfoWrap,
  Title,
  InfoTitle,
  MovieDescr,
  RaitingWrap,
  RaitingTitle,
  RaitingDescr,
} from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({
  movie: {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  },
}) => {
  const releaseYear = release_date.slice(0, 4);
  const score = ((vote_average * 100) / 10).toFixed(2);
  const filmGenres = genres.map(genre => genre.name).join(', ');

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';

  return (
    <Box>
      <Poster src={imgUrl} alt={`${original_title} poster`} />
      <FilmInfoWrap>
        <Title>
          {original_title} ({releaseYear})
        </Title>
        <InfoTitle>Overview</InfoTitle>
        <MovieDescr>{overview}</MovieDescr>
        <RaitingWrap>
          <RaitingTitle>User score:</RaitingTitle>
          <RaitingDescr>{score}%</RaitingDescr>
        </RaitingWrap>
        <InfoTitle>Genres</InfoTitle>
        <MovieDescr>{filmGenres}</MovieDescr>
      </FilmInfoWrap>
    </Box>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
