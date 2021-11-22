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

const placeholderImage = new URL('../../assets/placeholder.svg', import.meta.url).href;

export const NoImage = styled.div`
  ${tw`
    w-full
    h-full
    bg-no-repeat
    bg-center
  `}

  background-image: url(${placeholderImage});
  background-color: #DBDBDB;
`;
