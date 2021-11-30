import React from 'react';
import MovieList from '../MovieList/MovieList';
import { CreditsTitle } from './MovieCredits.style';
import { Container } from '../../shared/Flexi';

const MovieCredits = ({ credits }) => {
  if(!credits || credits.length === 0) {
    return null;
  }

  return (
    <>
      <Container>
        <CreditsTitle>
          Movie Credits
        </CreditsTitle>
      </Container>
      <MovieList movies={credits} />
    </>
  );
};

export default MovieCredits;
