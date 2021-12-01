import React from 'react';
import { Redirect } from 'react-router-dom';
import usePerson from '../hooks/usePerson';
import Fallback from '../shared/Fallback';
import MovieCredits from '../layout/MovieCredits/MovieCredits';
import PersonDetails from '../layout/PersonDetails/PersonDetails';
import { combineArrays } from '../util/combineArrays';

const Person = () => {
  const { details, loading, error } = usePerson();

  if(loading) {
    return <Fallback />;
  }

  if(error) {
    return <Redirect to="/404" />;
  }

  if(!details) {
    return null;
  }

  const { cast, crew } = details?.movie_credits || {};

  const credits = combineArrays([cast, crew], true);

  return (
    <>
      <PersonDetails details={details} />
      <MovieCredits credits={credits} />
    </>
  );
};

export default Person;
