import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from '../../shared/Link';
import {
  CardWrapper,
  ImageWrapper,
  CardContent,
  Name,
  Role,
} from './CastCard.style';

const placeholderImage = new URL('../../assets/avatar-placeholder.png', import.meta.url).href;

const CastCard = ({ info }) => {
  const h = 100;
  const imageURL = `https://www.themoviedb.org/t/p/w${h}_and_h${h}_face/`;

  const {
    id, name, character, profile_path: path, job,
  } = info;

  return (
    <CardWrapper>
      <ImageWrapper height={h}>
        <Link to={`/person/${id}`}>
          <LazyLoadImage
            src={path ? imageURL + path : placeholderImage}
            alt={`${name} ${character}`}
            effect="opacity"
          />
        </Link>
      </ImageWrapper>
      <CardContent>
        <Link to={`/person/${id}`}>
          <Name>{name}</Name>
        </Link>
        <Role>{job || character}</Role>
      </CardContent>
    </CardWrapper>
  );
};

export default CastCard;
