import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import Fallback from '../shared/Fallback';
import useShelf, { ListContext } from '../hooks/useShelf';

const WatchList = () => {
  const { list } = useContext(ListContext) || {};
  const { watchlist } = list || list;

  return (
    <>
      <MovieList movies={watchlist} />
    </>
  );
};

export default WatchList;
