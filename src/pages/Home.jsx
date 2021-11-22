import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import MovieList from '../layout/MovieList/MovieList';
import useMovies from '../hooks/useMovies';
import Fallback from '../shared/Fallback';

export const Button = ({ children }) => {
  const history = useHistory();
  const { pathname: location, search } = useLocation();
  const nextPage = () => {
    const parsed = queryString.parse(search);
    const { page } = parsed;
    const nextPage = (parseInt(page, 10) || 1) + 1;
    const newParams = new URLSearchParams();

    newParams.append('page', nextPage);

    history.push({ search: newParams.toString() });
  };

  return (
    <button onClick={nextPage}>
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
  if(!movies) return null;

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

export default Home;
