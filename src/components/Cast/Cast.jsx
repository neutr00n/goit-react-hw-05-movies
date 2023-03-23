import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsById } from '../../helpers/api/moviesAPI';
import { ActorsList } from '../ActorsList/ActorsList';
import { Loader } from '../Loader/Loader';
import { NotFound } from '../NotFound/NotFound';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    fetchActorsById(movieId)
      .then(response => {
        setActors(response);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
        throw new Error(error.message);
      });
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  if (actors.length === 0) {
    return <NotFound>We don't have any actors for this movie</NotFound>;
  }

  return <ActorsList items={actors} />;
};

export default Cast;
