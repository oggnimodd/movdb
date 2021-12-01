import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import useInitShelf from '../hooks/useInitShelf';
import Header from '../shared/Header/Header';

const Favorites = () => {
  useInitShelf();

  const { list } = useContext(ListContext) || {};
  const { favorites } = list || {};

  return (
    <>
      <Header
        title="Favorites"
        total={favorites.length}
        shelf
      />
      <MovieList movies={favorites} />
    </>
  );
};

export default Favorites;
