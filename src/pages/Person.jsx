import React from 'react';
import usePerson from '../hooks/usePerson';
import Fallback from '../shared/Fallback';
import MovieCredits from '../layout/MovieCredits/MovieCredits';
import PersonDetails from '../layout/PersonDetails/PersonDetails';
import { combineArrays } from '../util/combineArrays';

const Person = () => {
  const { details, loading, error } = usePerson();
  const { cast, crew } = details?.movie_credits || {};

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <p>error</p>;
  }

  if(!details) {
    return null;
  }

  const credits = combineArrays([cast, crew], true);

  return (
    <>
      <PersonDetails details={details} />
      <MovieCredits credits={credits} />
    </>
  );
};

export default Person;
