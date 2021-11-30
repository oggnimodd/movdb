import React from 'react';
import { FaArrowRight as Arrow } from 'react-icons/fa';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CastCardScroll from '../CastCardScroll/CastCardScroll';
import { Col } from '../../shared/Flexi';
import 'twin.macro';
import {
  CastWrapper,
  CastWrapperHeader,
  ScrollableWrapper,
  StyledView,
  ViewMore,
  CastWrapperFooter,
} from './DetailsCast.style';

// Customize react-custom-scrollbars-2 behaviour
const View = (props) => {
  return (
    <StyledView
      {...props}
      className="view"
      style={{
        position: 'relative',
      }}
    />
  );
};

const DetailsCast = ({ cast }) => {
  // Slice and filter cast ("Acting" and Max 10 length)
  const shownCast = cast.slice(0, 10);

  if(shownCast.length === 0) {
    return null;
  }

  return (
    <CastWrapper>
      <CastWrapperHeader>Cast</CastWrapperHeader>
      <ScrollableWrapper>
        <Scrollbars
          style={{
            display: 'block',
            overflow: 'auto',
            height: 'auto',
            minHeight: '100%',
          }}
          renderView={View}
          renderThumbHorizontal={(props) => (
            <div
              {...props}
              className="custom-scrollbar-horizontal"
            />
          )}
        >
          {
            shownCast.length > 0 && shownCast.map((i) => {
              return (
                <Col
                  tw="w-auto"
                  key={i.id}
                >
                  <CastCardScroll
                    castInfo={i}
                  />
                </Col>
              );
            })
          }
          <Col>
            <ViewMore>
              View More
              <Arrow />
            </ViewMore>
          </Col>
        </Scrollbars>
        <CastWrapperFooter>
          See Full Cast And Crew
          <Arrow />
        </CastWrapperFooter>
      </ScrollableWrapper>
    </CastWrapper>
  );
};

export default DetailsCast;
