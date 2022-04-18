import React, { useContext, useMemo } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import Header from '../shared/Header/Header';

const Favorites = () => {
  const { list } = useContext(ListContext) || {};
  const { favorites } = list || {};

  return useMemo(() => {
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
  }, [favorites.length]);
};

export default Favorites;
