import React from 'react';
import useMovieDetails from '../hooks/useMovieDetails';

import Fallback from '../shared/Fallback';
import AllCast from '../layout/AllCast/AllCast';

const Cast = () => {
  const { details, loading, error } = useMovieDetails();

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

  if(!details) {
    return null;
  }

  return (
    <>
      <AllCast details={details} />
    </>
  );
};

export default Cast;
