import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { RecommendationWrapper } from './MovieRecommendations.style';
import 'twin.macro';
import { Container } from '../../shared/Flexi';
import { MovieListTitle } from '../../shared/MovieListTitle';

const Child = ({ list }) => {
  return (
    <>
      <MovieListTitle>
        <Container>
          Recommendation
        </Container>
      </MovieListTitle>
      {
        list
          && <MovieList movies={list} />
      }
    </>
  );
};

const MovieRecommendations = ({ details, withPadding }) => {
  const list = details?.recommendations?.results || null;
  const history = useHistory();

  if(withPadding) {
    return (
      <RecommendationWrapper tw="sm:px-[15px]">
        <Child list={list} />
      </RecommendationWrapper>
    );
  }

  return (
    <RecommendationWrapper>
      <Child list={list} />
    </RecommendationWrapper>
  );
};

export default MovieRecommendations;
