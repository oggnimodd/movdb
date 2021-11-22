/* eslint-disable camelcase */
import React from 'react';
import { CardWrapper, CardImage } from './MovieCard.style';
import { Col } from '../Flexi';
import 'twin.macro';
import Link from '../Link';

const baseURL = 'https://image.tmdb.org/t/p/w200/';

const MovieCard = ({ movieDetails }) => {
  const {
    poster_path: imageURL, title, release_date: releaseDate, vote_average: point, id,
  } = movieDetails;

  return (
    <Col tw="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
      <CardWrapper>
        <Link to={`/movie/${id}`}>
          <CardImage>
            <img
              src={baseURL + imageURL}
              alt="cool"
            />
          </CardImage>
        </Link>
      </CardWrapper>
    </Col>
  );
};

export default MovieCard;
