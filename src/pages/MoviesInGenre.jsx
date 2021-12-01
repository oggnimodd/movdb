/* eslint-disable camelcase */
import React from 'react';
import MovieList from '../layout/MovieList/MovieList';
import useMovies from '../hooks/useMovies';
import Fallback from '../shared/Fallback';
import Filter from '../layout/Filter/Filter';
import Pagination from '../layout/Pagination/Pagination';

const MoviesInGenre = () => {
  const {
    movies, loading, error, filter, changeFilter,
  } = useMovies('genre');

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }
  if(!movies) return null;

  const { results, total_pages } = movies || {};

  return (
    <>
      {/* List header (description), ex => Popular Movies -------- page 1 of 500 */}

      {/* filter */}
      <Filter
        filter={filter}
        changeFilter={changeFilter}
      />

      {/* movie list */}
      <MovieList movies={results} />

      {/* pagination */}
      <Pagination total={total_pages} />
    </>
  );
};

export default MoviesInGenre;
