import React from 'react';
import tw, { styled } from 'twin.macro';
import { Container } from './Flexi';
import { Spinner, Skeleton } from './Spinner';

export const Wrapper = styled.div`
  ${tw`
    w-full 
    h-screen 
    flex 
    items-center 
    justify-center
  `}
`;

const Fallback = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner>
          <Skeleton />
        </Spinner>
      </Wrapper>
    </Container>
  );
};

export default Fallback;
