/* eslint-disable camelcase */
import React from 'react';
import MovieList from '../layout/MovieList/MovieList';
import Fallback from '../shared/Fallback';
import useMovies from '../hooks/useMovies';
import Pagination from '../layout/Pagination/Pagination';

const SearchResults = () => {
  // get movie list here and pass to children
  // const {data,loading,error} = useMovie();
  const { movies, loading, error } = useMovies('search');

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

  const { results, total_pages } = movies || {};

  if(!movies) {
    return null;
  }

  return (
    <>
      {/* List header (description), ex => Popular Movies -------- page 1 of 500 */}

      {/* movie list */}
      <MovieList movies={results} />

      {/* pagination */}
      <Pagination total={total_pages} />
    </>
  );
};

export default SearchResults;
