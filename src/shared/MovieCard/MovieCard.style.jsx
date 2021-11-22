import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`h-full`}
  a{
    ${tw`
      block
      h-full
    `}
  }
`;

export const CardImage = styled.div`
  ${tw`
    h-full
  `}

  img{
    ${tw`
      w-full
      object-cover
    `}
    height: 300px;
  }
`;
