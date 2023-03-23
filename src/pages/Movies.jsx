import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from '../helpers/api/moviesAPI';
import { MovieForm } from '../components/MovieForm/MovieForm';
import { MoviesList } from '../components/MoviesList/MoviesList';

import { Loader } from '../components/Loader/Loader';
import { NotFound } from 'components/NotFound/NotFound';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    async function getData() {
      try {
        setStatus(STATUS.PENDING);
        const { results } = await fetchMoviesBySearch(query);
        setMovies(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        throw new Error(error.message);
      }
    }
    getData();
  }, [query]);

  return (
    <>
      <MovieForm handleSearchValue={setSearchParams} />
      <MoviesList items={movies} location={location} />
      {movies.length === 0 && (
        <NotFound>We don't have any movies for this request</NotFound>
      )}
      {status === STATUS.PENDING && <Loader />}
    </>
  );
};

export default Movies;
