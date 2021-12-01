import React, { useContext } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import useInitShelf from '../hooks/useInitShelf';
import Header from '../shared/Header/Header';

const WatchList = () => {
  useInitShelf();

  const { list } = useContext(ListContext) || {};
  const { watchlist } = list || {};

  return (
    <>
      <Header
        title="Watch List"
        total={watchlist.length}
        shelf
      />
      <MovieList movies={watchlist} />
    </>
  );
};

export default WatchList;
