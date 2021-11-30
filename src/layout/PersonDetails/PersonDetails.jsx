import React, { useState, useEffect } from 'react';
import'twin.macro';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../shared/Flexi';
import { parseDate } from '../../util/parseDate';
import {
  ImageWrapper,
  Title,
  SubSection,
  SubTitle,
  SubInfo,
  Description,
} from '../../shared/Details';
import {
  ReadMoreMask,
  ReadMoreButton,
} from './PersonDetails.style';
import { RenderLinks } from '../../shared/ExtractList';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const genderCode = {
  1: 'Female',
  2: 'Male',
};

const profileBaseURL = 'https://image.tmdb.org/t/p/w500//';
const placeholderImage = new URL('../../assets/avatar-placeholder.png', import.meta.url).href;

const PersonDetails = ({ details }) => {
  const {
    profile_path: imageURL, name, birthday, place_of_birth: pob, gender, biography, imdb_id: imdbID,
    homepage,
  } = details;

  const needTruncation = biography.length > 600;
  const [hide, setHide] = useState(needTruncation || false);
  const truncate = needTruncation ? `${biography.slice(0, 400)} .......` : biography;
  const [bio, setBio] = useState(truncate);

  const collapse = () => {
    setHide(false);
    setBio(biography);
  };

  return (
    <Container tw="my-20">
      <div tw="flex lg:flex-row-reverse flex-row flex-wrap">
        <div tw="w-full lg:w-4/12">
          <ImageWrapper>
            <LazyLoadImage
              src={imageURL ? profileBaseURL + imageURL : placeholderImage}
              alt="Gewage"
              effect="opacity"
            />
          </ImageWrapper>
        </div>
        <div tw="w-full lg:w-8/12">
          <Title tw="mb-8">
            {name}
          </Title>

          <SubSection>
            <SubTitle>Birthday</SubTitle>
            <SubInfo>{birthday && parseDate(birthday)}</SubInfo>
          </SubSection>

          <SubSection>
            <SubTitle>Place of Birth</SubTitle>
            <SubInfo>{pob}</SubInfo>
          </SubSection>

          <SubSection>
            <SubTitle>Gender</SubTitle>
            <SubInfo>{gender !== 0 && genderCode[gender]}</SubInfo>
          </SubSection>

          <Description>
            <SubTitle>Biography</SubTitle>
            <div tw="sm:pr-10 relative">
              <p>
                {bio}
              </p>
              {
                hide
                && (
                <ReadMoreMask>
                  <ReadMoreButton onClick={collapse}>
                    Read More
                  </ReadMoreButton>
                </ReadMoreMask>
                )
              }
            </div>
          </Description>

          <SubSection>
            <SubTitle>Links</SubTitle>
            <RenderLinks
              homepage={homepage}
              imdbID={imdbID}
              domain="name"
            />
          </SubSection>
        </div>
      </div>
    </Container>
  );
};

export default PersonDetails;
