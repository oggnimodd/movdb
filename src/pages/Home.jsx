import React from 'react';
import MovieList from '../layout/MovieList/MovieList';
import { movies } from '../data/movies';
import useMovies from '../hooks/useMovies';

const Home = () => {
  // get movie list here and pass to children
  // const {data,loading,error} = useMovie();
  const { movies, loading, error } = useMovies('discover');

  if(loading) {
    return <p>loading</p>;
  }

  if(error) {
    return <p>error</p>;
  }

  const { results } = movies;

  return (
    <>
      {/* List header (description), ex => Popular Movies -------- page 1 of 500 */}

      {/* filter */}

      {/* movie list */}
      <MovieList movies={results} />

      {/* pagination */}
    </>
  );
};

export default Home;
