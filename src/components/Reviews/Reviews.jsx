import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../helpers/api/moviesAPI';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { Loader } from '../Loader/Loader';
import { NotFound } from '../NotFound/NotFound';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setStatus(STATUS.PENDING);

        const { results } = await fetchReviewsById(movieId);
        setReview(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        throw new Error(error.message);
      }
    }
    getData();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <NotFound>We don't have any reviews for this movie</NotFound>;
  }

  return <ReviewsList items={reviews} />;
};

export default Reviews;
