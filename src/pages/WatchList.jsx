import React, { useContext, useMemo } from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { ListContext } from '../hooks/useShelf';
import Header from '../shared/Header/Header';

const WatchList = () => {
  const { list } = useContext(ListContext) || {};
  const { watchlist } = list || {};

  return useMemo(() => {
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
  }, [watchlist.length]);
};

export default WatchList;
