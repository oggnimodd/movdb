import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';

const Favorites = () => {
  const { list } = useContext(ListContext) || {};
  const { favorites } = list || {};

  return (
    <>
      <MovieList movies={favorites} />
    </>
  );
};

export default Favorites;
