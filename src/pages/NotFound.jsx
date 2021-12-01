/* eslint-disable import/no-unresolved */
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Container } from '../shared/Flexi';

export const Wrapper = styled.div`
  ${tw`
    flex  
    flex-col
    justify-center
    items-center 
    w-full 
    mt-10
  `}

  h1{
    ${tw`
      font-primary
      font-semibold
    `}

    font-size: 100px;
  }

  p{
    ${tw`
      font-secondary
      mt-2
      font-semibold
    `}
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          404
        </h1>
        <p>
          OOPS! PAGE NOT FOUND
        </p>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
