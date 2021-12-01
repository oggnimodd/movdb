import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';
import Fallback from '../shared/Fallback';
import MovieDetails from '../layout/MovieDetails/MovieDetails';
import MovieRecommendations from '../layout/MovieRecommendations/MovieRecommendations';

const Movie = () => {
  const history = useHistory();
  const { details, error, loading } = useMovieDetails();

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <Redirect to="/404" />;
  }

  if(!details) {
    return null;
  }

  return (
    <>
      <MovieDetails details={details}>
        <MovieRecommendations
          withPadding
          details={details}
        />
      </MovieDetails>
    </>
  );
};

export default Movie;
