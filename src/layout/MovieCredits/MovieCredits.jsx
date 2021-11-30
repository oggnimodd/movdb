import React from 'react';
import MovieList from '../MovieList/MovieList';
import { CreditsTitle } from './MovieCredits.style';
import { Container } from '../../shared/Flexi';

const MovieCredits = ({ cast }) => {
  if(!cast || cast.lenght === 0) {
    return null;
  }

  return (
    <>
      <Container>
        <CreditsTitle>
          Movie Credits
        </CreditsTitle>
      </Container>
      <MovieList movies={cast} />
    </>
  );
};

export default MovieCredits;
