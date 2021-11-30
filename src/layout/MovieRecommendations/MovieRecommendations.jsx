import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { RecommendationWrapper, RecommendationTitle } from './MovieRecommendations.style';
import 'twin.macro';

const Child = ({ list }) => {
  return (
    <>
      <RecommendationTitle>
        Recommendation
      </RecommendationTitle>
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

  if(!list) {
    history.push('/404');
  }

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
