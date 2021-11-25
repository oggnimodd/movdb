import React from 'react';
import MovieList from '../layout/MovieList/MovieList';
import Fallback from '../shared/Fallback';
import useShelf from '../hooks/useShelf';

const Favorites = () => {
  const { movies, loading, error } = useShelf('favorites');

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default Favorites;
