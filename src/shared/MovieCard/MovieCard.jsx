/* eslint-disable camelcase */
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  CardWrapper, CardImage, NoImage, Title, Year, Score,
} from './MovieCard.style';
import { Col } from '../Flexi';
import 'twin.macro';
import Link from '../Link';
import { formatYear } from '../../util/formatYear';
import { UnderlineAnimation } from '../UnderlineAnimation';
import { scoreColors } from '../../util/scoreColor';
import CardActions from '../CardActions/CardActions';

import 'react-lazy-load-image-component/src/effects/opacity.css';

const baseURL = 'https://image.tmdb.org/t/p/w200/';
const placeholderImage = new URL('../../assets/failed_image.png', import.meta.url).href;

const MovieCard = ({ movieDetails }) => {
  const {
    poster_path: imageURL, title, release_date: releaseDate, vote_average: point, id,
  } = movieDetails;

  const scoreBg = scoreColors(point);

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
                    effect="opacity"
                  />
                )
                : <NoImage />
            }
            <Score bg={scoreBg}>{point !== 0 ? point.toFixed(1) : 'NR'}</Score>
          </CardImage>
        </Link>
        <CardActions details={movieDetails} />
        <Title>
          <Link to={`/movie/${id}`}>
            <UnderlineAnimation size={2}>
              {title}
            </UnderlineAnimation>
          </Link>
        </Title>
        {/* year only */}
        <Year>{releaseDate && formatYear(releaseDate)}</Year>
      </CardWrapper>
    </Col>
  );
};

export default MovieCard;
