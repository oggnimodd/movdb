import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import useInitShelf from '../hooks/useInitShelf';

const Favorites = () => {
  useInitShelf();

  const { list } = useContext(ListContext) || {};
  const { favorites } = list || {};

  return (
    <>
      <MovieList movies={favorites} />
    </>
  );
};

export default Favorites;
