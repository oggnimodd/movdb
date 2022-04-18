import React from 'react';
import { FaArrowRight as Arrow } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import CastCardScroll from '../CastCardScroll/CastCardScroll';
import 'twin.macro';
import Link from '../../shared/Link';
import {
  CastWrapper,
  CastWrapperHeader,
  CastWrapperFooter,
} from './DetailsCast.style';
import { breakpoints } from '../../constants/breakpoints';

const responsiveBreakpoints = {
  // md
  0: {
    slidesPerView: 1,
  },
  [breakpoints.md]: {
    slidesPerView: 2,
  },
  // lg
  [breakpoints.lg]: {
    slidesPerView: 5,
  },
};

const swiperSettings = {
  spaceBetween: 3,
  loop: true,
  breakpoints: responsiveBreakpoints,
};

const DetailsCast = ({ cast, id }) => {
  // Slice and filter cast ("Acting" and Max 10 length)
  const shownCast = cast.slice(0, 10);

  if(shownCast.length === 0) {
    return null;
  }

  return (
    <CastWrapper>
      <CastWrapperHeader>Cast</CastWrapperHeader>

      <div tw="w-full">
        <Swiper
          {...swiperSettings}
        >
          {
          shownCast.length > 0 && shownCast.map((i) => {
            return (
              <SwiperSlide key={i.id}>

                <CastCardScroll
                  castInfo={i}
                />
              </SwiperSlide>
            );
          })
        }
        </Swiper>
      </div>

      <CastWrapperFooter>
        <Link to={`/movie/${id}/cast`}>
          See Full Cast And Crew
          <Arrow />
        </Link>
      </CastWrapperFooter>
    </CastWrapper>
  );
};

export default DetailsCast;
