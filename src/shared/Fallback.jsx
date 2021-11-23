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
  `}

  height: calc(100vh - 100px);
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
