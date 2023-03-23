import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../helpers/api/moviesAPI';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { TitlePage } from '../components/TitlePage/TitlePage';
import { Loader } from '../components/Loader/Loader';
import { PeriodBtn } from '../components/PeriodBtn/PeriodBtn';
import { useLocalStorage } from '../hooks/useLocalStorage';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const LOCAL_STOR_PERIOD_KEY = 'trendingPeriod';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [period, setPeriod] = useLocalStorage(LOCAL_STOR_PERIOD_KEY, 'day');
  const location = useLocation();

  const handleFindBtnClick = () => {
    switch (period) {
      case 'day':
        setPeriod('week');
        break;

      case 'week':
        setPeriod('day');
        break;

      default:
        return console.error('Unknown find by type');
    }
  };

  useEffect(() => {
    setStatus(STATUS.PENDING);

    fetchMovies(period)
      .then(movies => {
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
        throw new Error(error.message);
      });
  }, [period]);

  const title = period === 'day' ? 'Trending today' : 'Trending this week';

  return (
    <>
      <TitlePage>{title}</TitlePage>
      <PeriodBtn handleFindBtnClick={handleFindBtnClick} period={period} />
      <MoviesList items={movies} location={location} />
      {status === STATUS.PENDING && <Loader />}
    </>
  );
};

export default Home;
