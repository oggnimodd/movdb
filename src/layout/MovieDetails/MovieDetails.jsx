import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'twin.macro';

import { parseDate } from '../../util/parseDate';
import TrailerVideoPlayer from '../TrailerVideo/TrailerVideoPlayer';
import MovieActions from '../MovieActions/MovieActions';
import DetailsCast from '../DetailsCast/DetailsCast';
import { Container } from '../../shared/Flexi';

import {
  ImageWrapper,
  Title,
  SubSection,
  SubTitle,
  SubInfo,
  Description,
} from '../../shared/Details';
import {
  RenderGenres,
  RenderLanguages,
  RenderLinks,
  RenderCountries,
} from '../../shared/ExtractList';
import {
  DetailsWrapper,
  Backdrop,
  GradientTransition,
  Content,
  StyledContainer,
  NoImage,
} from './MovieDetails.style';

import 'react-lazy-load-image-component/src/effects/opacity.css';

const baseURL = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
const posterBaseURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = ({ details, children }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const {
    backdrop_path: backdrop,
    poster_path: imageURL,
    release_date: date,
    spoken_languages: lang,
    imdb_id: imdbID,
    production_countries: countries,
    videos,
    runtime,
    overview,
    title,
    genres,
    homepage,
    credits,
  } = details;

  const openTrailer = () => setShowTrailer(true);

  const closeTrailer = () => setShowTrailer(false);

  // MOVE THIS TO A FUNCTION
  let video = videos.results.filter((i) => i.type === 'Trailer')[0];
  if(!video) {
    video = videos.results[0];
  }

  return (
    <DetailsWrapper>
      <TrailerVideoPlayer
        showTrailer={showTrailer}
        closeTrailer={closeTrailer}
        video={video}
      />
      <Backdrop>
        <GradientTransition />
        <LazyLoadImage
          src={baseURL + backdrop}
          alt={title}
          effect="opacity"
        />
      </Backdrop>
      <StyledContainer>
        <Content>
          <div tw="flex lg:flex-row-reverse flex-row flex-wrap">
            {/* Image */}
            <div tw="w-full lg:w-4/12">
              <ImageWrapper>
                {
                  imageURL
                    ? (
                      <LazyLoadImage
                        src={posterBaseURL + imageURL}
                        alt={title}
                        effect="opacity"
                      />
                    )
                    : <NoImage />
                }
              </ImageWrapper>
            </div>
            {/* Content */}
            <div tw="w-full lg:w-8/12">
              <Container tw="px-0 sm:px-[15px]">
                <MovieActions
                  details={details}
                  video={video}
                  details={details}
                  openTrailer={openTrailer}
                />

                <Title>{title}</Title>

                <Description>{overview}</Description>

                <SubSection>
                  <SubTitle>Genres</SubTitle>
                  <RenderGenres genres={genres} />
                </SubSection>

                <SubSection>
                  <SubTitle>Runtime</SubTitle>
                  <SubInfo>{runtime ? `${runtime} min` : null} </SubInfo>
                </SubSection>

                <SubSection>
                  <SubTitle>Spoken Language(s)</SubTitle>
                  <RenderLanguages languages={lang} />
                </SubSection>

                <SubSection>
                  <SubTitle>Movie Status</SubTitle>
                  <SubInfo>Released</SubInfo>
                </SubSection>

                <SubSection>
                  <SubTitle>Release Date</SubTitle>
                  <SubInfo>{date && parseDate(date)}</SubInfo>
                </SubSection>

                <SubSection>
                  <SubTitle>Production Countries</SubTitle>
                  <RenderCountries countries={countries} />
                </SubSection>

                <SubSection>
                  <SubTitle>Links</SubTitle>
                  <RenderLinks
                    homepage={homepage}
                    imdbID={imdbID}
                    domain="title"
                  />
                </SubSection>

              </Container>
            </div>
          </div>
          <DetailsCast cast={credits.cast} />
        </Content>
        {children}
      </StyledContainer>
    </DetailsWrapper>
  );
};

export default MovieDetails;
