import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  api_key: '193a1318aa83a5b49d1c16448163261b',
});

export async function fetchMovies(period) {
  const response = await axios.get(`/trending/movie/${period}?${searchParams}`);
  return response.data.results;
}

export async function fetchMoviesByID(id) {
  const response = await axios.get(`/movie/${id}?${searchParams}`);
  return response.data;
}

export async function fetchActorsById(id) {
  const response = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return response.data.cast;
}

export async function fetchReviewsById(id) {
  const response = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return response.data;
}

export async function fetchMoviesBySearch(value) {
  const response = await axios.get(
    `/search/movie?${searchParams}&query=${value}`
  );
  return response.data;
}
