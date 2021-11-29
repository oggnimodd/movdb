import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import useInitShelf from '../hooks/useInitShelf';

const WatchList = () => {
  useInitShelf();

  const { list } = useContext(ListContext) || {};
  const { watchlist } = list || {};

  return (
    <>
      <MovieList movies={watchlist} />
    </>
  );
};

export default WatchList;
