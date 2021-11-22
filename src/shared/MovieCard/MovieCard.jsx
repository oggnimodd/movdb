/* eslint-disable camelcase */
import React, { useState } from 'react';
import { CardWrapper, CardImage, NoImage } from './MovieCard.style';
import { Col } from '../Flexi';
import 'twin.macro';
import Link from '../Link';

const baseURL = 'https://image.tmdb.org/t/p/w200/';
const placeholderImage = new URL('../../assets/failed_image.png', import.meta.url).href;

console.log(placeholderImage);

const MovieCard = ({ movieDetails }) => {
  const {
    poster_path: imageURL, title, release_date: releaseDate, vote_average: point, id,
  } = movieDetails;

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <Col tw="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6">
      <CardWrapper>
        <Link to={`/movie/${id}`}>
          <CardImage>
            {
              imageURL
                ? (
                  <img
                    src={baseURL + imageURL}
                    alt={title}
                    onError={onImageError}
                  />
                )
                : <NoImage />
            }
          </CardImage>
        </Link>
      </CardWrapper>
    </Col>
  );
};

export default MovieCard;
