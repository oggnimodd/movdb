import React from 'react';
import {
  CardWrapper,
  CardImage,
  Text,
  CardContent,
} from './CastCardScroll.style';

const imageURL = 'https://www.themoviedb.org/t/p//w300_and_h450_face';
const placeholderImage = new URL('../../assets/avatar-placeholder.png', import.meta.url).href;

const CastCardScroll = ({ castInfo }) => {
  const { name, character, profile_path: path } = castInfo;

  return (
    <CardWrapper>
      <CardImage>
        <img
          src={path ? imageURL + path : placeholderImage}
          alt={`${name} ${character}`}
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
