import React from 'react';
import { Redirect } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';

import Fallback from '../shared/Fallback';
import AllCast from '../layout/AllCast/AllCast';

const Cast = () => {
  const { details, loading, error } = useMovieDetails();

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <Redirect to="/404" />;
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
