/* eslint-disable camelcase */
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import MovieList from '../layout/MovieList/MovieList';
import useMovies from '../hooks/useMovies';
import Fallback from '../shared/Fallback';
import { Button } from './Home';

const MoviesInGenre = () => {
  const { movies, loading, error } = useMovies('genre');

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
      <Button total={total_pages}>
        next
      </Button>

      {/* filter */}

      {/* movie list */}
      <MovieList movies={results} />

      {/* pagination */}
    </>
  );
};

export default MoviesInGenre;
