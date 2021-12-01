import React from 'react';
import MovieList from '../MovieList/MovieList';
import { CreditsHeader, Count } from './MovieCredits.style';
import { Container } from '../../shared/Flexi';
import { MovieListTitle } from '../../shared/MovieListTitle';

const MovieCredits = ({ credits }) => {
  const total = credits.length;
  if(!credits || total === 0) {
    return null;
  }

  return (
    <>
      <Container>
        <CreditsHeader>
          <MovieListTitle>
            Movie Credits
          </MovieListTitle>
          <Count>
            {total} movie{total > 1 ? 's' : null}
          </Count>
        </CreditsHeader>

      </Container>
      <MovieList movies={credits} />
    </>
  );
};

export default MovieCredits;
