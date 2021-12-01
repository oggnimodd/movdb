/* eslint-disable camelcase */
import React from 'react';
import { Redirect } from 'react-router-dom';
import MovieList from '../layout/MovieList/MovieList';
import useMovies from '../hooks/useMovies';
import Fallback from '../shared/Fallback';
import Filter from '../layout/Filter/Filter';
import Pagination from '../layout/Pagination/Pagination';
import Header from '../shared/Header/Header';

const MoviesInGenre = () => {
  const {
    movies, loading, error, filter, changeFilter, pageTitle, currentPage,
  } = useMovies('genre');

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <Redirect to="/404" />;
  }

  if(!movies) return null;

  const { results, total_pages } = movies || {};

  return (
    <>
      {/* List header (description), ex => Popular Movies -------- page 1 of 500 */}
      <Header
        title={pageTitle.replace('_', ' ')}
        total={total_pages}
        page={currentPage}
      />

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
