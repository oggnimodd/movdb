import tw, { styled } from 'twin.macro';

export const BrandStyle = styled.h1`
  ${tw`
    text-3xl 
    text-white
    font-primary
    text-center
    font-semibold
    py-5
  `}

  span{
    ${tw`
      text-accent
    `}
  }
`;
