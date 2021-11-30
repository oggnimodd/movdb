import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  CardWrapper,
  CardImage,
  Text,
  CardContent,
} from './CastCardScroll.style';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const imageURL = 'https://www.themoviedb.org/t/p//w300_and_h450_face';
const placeholderImage = new URL('../../assets/avatar-placeholder.png', import.meta.url).href;

const CastCardScroll = ({ castInfo }) => {
  const { name, character, profile_path: path } = castInfo;

  return (
    <CardWrapper>
      <CardImage>
        <LazyLoadImage
          src={path ? imageURL + path : placeholderImage}
          alt={`${name} ${character}`}
          effect="opacity"
        />
      </CardImage>
      <CardContent>
        <Text>{name}</Text>
        <Text>{character}</Text>
      </CardContent>
    </CardWrapper>
  );
};

export default CastCardScroll;
