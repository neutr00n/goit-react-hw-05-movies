import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesByID } from '../helpers/api/moviesAPI';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { AdditInform } from '../components/AdditInform/AdditInform';
import { Loader } from '../components/Loader/Loader';
import { BackLink } from '../components/BackLink/BackLink';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setStatus(STATUS.PENDING);
    fetchMoviesByID(movieId)
      .then(mov => {
        setMovie(mov);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
        throw new Error(error.message);
      });
  }, [movieId]);

  if (status === STATUS.RESOLVED) {
    return (
      <>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieInfo movie={movie} />
        <AdditInform location={backLinkHref} />
        <Outlet />
      </>
    );
  }

  if (status === STATUS.PENDING) {
    return <Loader />;
  }
};

export default MovieDetails;
