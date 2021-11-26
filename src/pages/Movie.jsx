import React from 'react';
import useMovieDetails from '../hooks/useMovieDetails';
import Fallback from '../shared/Fallback';
import MovieDetails from '../layout/MovieDetails/MovieDetails';
import MovieRecommendations from '../layout/MovieRecommendations/MovieRecommendations';

const Movie = () => {
  const { details, error, loading } = useMovieDetails();

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

  if(!details) {
    return null;
  }

  return (
    <>
      <MovieDetails details={details}>
        <MovieRecommendations details={details} />
      </MovieDetails>
    </>
  );
};

export default Movie;
