/* eslint-disable camelcase */
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  CardWrapper, CardImage, NoImage, Title, Year,
} from './MovieCard.style';
import { Col } from '../Flexi';
import 'twin.macro';
import Link from '../Link';
import { formatYear } from '../../util/formatYear';

import 'react-lazy-load-image-component/src/effects/blur.css';

const baseURL = 'https://image.tmdb.org/t/p/w200/';
const placeholderImage = new URL('../../assets/failed_image.png', import.meta.url).href;

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
                  <LazyLoadImage
                    src={baseURL + imageURL}
                    alt={title}
                    onError={onImageError}
                    effect="blur"
                  />
                )
                : <NoImage />
            }
          </CardImage>
        </Link>
        <Title>{title}</Title>
        {/* year only */}
        <Year>{releaseDate && formatYear(releaseDate)}</Year>
      </CardWrapper>
    </Col>
  );
};

export default MovieCard;
