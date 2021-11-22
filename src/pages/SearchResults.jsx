import React from 'react';
import MovieList from '../layout/MovieList/MovieList';
import Fallback from '../shared/Fallback';
import useMovies from '../hooks/useMovies';
import { Button } from './Home';

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

  const { results } = movies || {};

  return (
    <>
      {/* List header (description), ex => Popular Movies -------- page 1 of 500 */}
      <Button>
        next
      </Button>

      {/* filter */}

      {/* movie list */}
      <MovieList movies={results} />

      {/* pagination */}
    </>
  );
};

export default SearchResults;
