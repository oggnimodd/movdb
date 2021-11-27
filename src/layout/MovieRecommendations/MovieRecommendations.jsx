import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { RecommendationWrapper, RecommendationTitle } from './MovieRecommendations.style';

const MovieRecommendations = ({ details }) => {
  const list = details?.recommendations?.results || null;
  const history = useHistory();

  if(!list) {
    history.push('/404');
  }

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
