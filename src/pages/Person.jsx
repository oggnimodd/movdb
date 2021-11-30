import React from 'react';
import usePerson from '../hooks/usePerson';
import Fallback from '../shared/Fallback';
import MovieCredits from '../layout/MovieCredits/MovieCredits';
import PersonDetails from '../layout/PersonDetails/PersonDetails';

const Person = () => {
  const { details, loading, error } = usePerson();

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
      <PersonDetails details={details} />
      <MovieCredits cast={details.movie_credits.cast} />
    </>
  );
};

export default Person;
