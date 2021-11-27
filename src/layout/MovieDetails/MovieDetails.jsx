import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  DetailsWrapper,
  Backdrop,
  GradientTransition,
  Content,
  StyledContainer,
  ImageWrapper,
  Details,
  Title,
  Overview,
  SubSection,
  SubTitle,
  SubInfo,
  NoImage,
} from './MovieDetails.style';
import 'twin.macro';
import { RenderGenres } from './ExtractArray';

import 'react-lazy-load-image-component/src/effects/blur.css';

const baseURL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = ({ details, children }) => {
  const {
    backdrop_path: backdrop,
    poster_path: imageURL,
    release_date: date,
    overview,
    title,
    genres,
  } = details;

  console.log('Gewgew');

  return (
    <DetailsWrapper>
      <Backdrop>
        <GradientTransition />
        <LazyLoadImage
          src={baseURL + backdrop}
          alt={title}
          effect="blur"
        />
      </Backdrop>
      <StyledContainer>
        <Content>
          <div tw="flex flex-wrap">
            <div tw="w-full lg:w-4/12">
              <ImageWrapper>
                {
                  imageURL
                    ? (
                      <LazyLoadImage
                        src={posterBaseURL + imageURL}
                        alt={title}
                        effect="blur"
                      />
                    )
                    : <NoImage />
                }
              </ImageWrapper>
            </div>
            <div tw="w-full lg:w-8/12">
              <Details>
                <Title>{title}</Title>
                <Overview>{overview}</Overview>
                <SubSection>
                  <SubTitle>Genres</SubTitle>
                  <RenderGenres genres={genres} />
                </SubSection>
                <SubSection>
                  <SubTitle>Production Countries</SubTitle>
                </SubSection>
                <SubSection>
                  <SubTitle>Runtime</SubTitle>
                  <SubInfo>93 min</SubInfo>
                </SubSection>
                <SubSection>
                  <SubTitle>Spoken Language(s)</SubTitle>
                </SubSection>
                <SubSection>
                  <SubTitle>Movie Status</SubTitle>
                  <SubInfo>Released</SubInfo>
                </SubSection>
                <SubSection>
                  <SubTitle>Release Date</SubTitle>
                  <SubInfo>20 januari 2020</SubInfo>
                </SubSection>
                <SubSection>
                  <SubTitle>Links</SubTitle>
                </SubSection>

              </Details>
            </div>
          </div>
        </Content>
        {children}
      </StyledContainer>
    </DetailsWrapper>
  );
};

export default MovieDetails;
