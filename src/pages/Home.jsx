/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import MovieList from '../layout/MovieList/MovieList';
import useMovies from '../hooks/useMovies';
import Fallback from '../shared/Fallback';

export const Button = ({ children, total }) => {
  const history = useHistory();
  const { search } = useLocation();

  const parsed = queryString.parse(search);
  const { page, ...rest } = parsed;
  const nextPage = (parseInt(page, 10) || 1) + 1;
  const newParams = new URLSearchParams({
    ...rest,
  });

  const handleClick = () => {
    newParams.append('page', nextPage);

    history.push({ search: newParams.toString() });
  };

  if(nextPage > total) {
    return null;
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

const Home = () => {
  // get movie list here and pass to children
  // const {data,loading,error} = useMovie();
  const { movies, loading, error } = useMovies('discover');

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

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

export default Home;
