import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    w-full
    overflow-hidden
  `}
  aspect-ratio: 1/1.45;


  a{
    ${tw`
      block
      w-full
      h-full
    `}
  }
`;

export const CardImage = styled.div`
  ${tw`h-full`}

  /* overwrite image lazyload component height */
  span{
    height: 100%;
  }

  img{
    ${tw`
      w-full
      object-center
      object-cover
      h-full
    `}

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
