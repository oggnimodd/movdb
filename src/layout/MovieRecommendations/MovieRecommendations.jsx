import React from 'react';
import MovieList from '../MovieList/MovieList';
import { RecommendationWrapper, RecommendationTitle } from './MovieRecommendations.style';

const MovieRecommendations = ({ details }) => {
  const list = details.recommendations.results;

  return (
    <RecommendationWrapper>
      <RecommendationTitle>
        Recommendation
      </RecommendationTitle>
      {
          list
            && <MovieList movies={list} />
        }
    </RecommendationWrapper>
  );
};

export default MovieRecommendations;
