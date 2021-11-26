import tw, { styled } from 'twin.macro';
import { UnderlineAnimation } from '../UnderlineAnimation';

export const CardWrapper = styled.div`
  ${tw`
    w-full
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
  ${tw`h-full w-full relative`}

  /* overwrite image lazyload component height */
  span{
    height: 100%;
    width: 100%;
  }

  img{
    ${tw`
      inline-block
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

export const Score = styled.div`
  ${tw`
    absolute 
    bottom-0
    right-0
    rounded-full 
    text-black
    font-secondary
    font-bold
    flex
    items-center
    justify-center
    text-sm
    pointer-events-auto
    border-4
    border-primary
  `}

  width: 40px;
  height: 40px;
  transform: translateY(50%);
  background-color: ${(props) => props.bg};
  opacity: 0.96;
`;

export const Title = styled.h2`
  ${tw`
    mt-4
    font-primary 
    font-semibold
    mb-1
    inline-block
    hover:text-accent
  `}
`;

export const Year = styled.p`
  ${tw`
    font-secondary
    text-sm
    text-grey
    font-semibold
    font-bold
  `}
`;
