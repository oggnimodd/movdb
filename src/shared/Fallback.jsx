import React from 'react';
import tw, { styled } from 'twin.macro';
import { Container } from './Flexi';
import { Spinner, Skeleton } from './Spinner';

export const Wrapper = styled.div`
  ${tw`
    w-full 
    flex 
    items-center 
    justify-center 
    bg-primary
  `}

  height: calc(100vh - 100px);
  z-index: 9999;
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
