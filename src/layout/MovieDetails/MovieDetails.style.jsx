import tw, { styled } from 'twin.macro';
import { Container } from '../../shared/Flexi';
import { breakpoints }from '../../constants/breakpoints';

export const DetailsWrapper = styled.div`
  ${tw`
    relative
  `}
`;

export const StyledContainer = styled(Container)`
  ${tw`
    absolute
    top-0
    left-0
    z-50
    px-0
    sm:px-[15px]
  `}
`;

export const GradientTransition = styled.div`
  ${tw`
    absolute
    top-0 
    left-0 
    w-full 
    h-full
    z-10
  `}

  background: rgb(21,31,48);
  background: linear-gradient(0deg, rgba(21,31,48,1) 0%, rgba(21,31,48,0.9136029411764706) 35%, rgba(21,31,48,0.8323704481792717) 48%, rgba(21,31,48,0.7371323529411764) 64%, rgba(21,31,48,0.5970763305322129) 78%, #151f3096 92%, #151f3092 100%);
`;

export const Backdrop = styled.div`
  ${tw`
    w-full
    fixed
    overflow-hidden
  `}

  min-height: 300px;
  aspect-ratio: 1 / 1.2;

  @media screen and (min-width:${breakpoints.sm}px){
    min-height: 300px;
    aspect-ratio: 1920 / 1080;
  }

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

export const Content = styled.div`
  ${tw`
    rounded-lg 
    bg-primary
    mt-60
    px-[15px]
    py-20
    relative
  `}

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background: rgba(21, 31, 48, 0.7);
  border: 1px solid rgba(21, 31, 48, 0.31);
`;

export const ImageWrapper = styled.div`
  ${tw`
    lg:pr-5
    w-full
    relative
  `}

  aspect-ratio: 500/750;

  img{
    ${tw`
      inline-block
      w-full
      object-center
      object-cover
      rounded-2xl
    `}

  box-shadow: rgba(7, 7, 7, 0.322) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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

export const Details = styled.div`
  ${tw`
    sm:px-6
  `}
`;

export const Title = styled.h2`
  ${tw`
    font-primary
    text-5xl
    font-semibold
    mb-5
  `}
`;

export const Overview = styled.p`
  ${tw`
    font-secondary
    select-none
  `}

  line-height: 1.8;
`;

export const SubSection = styled.div`
  ${tw`
    mb-4
  `}
`;

export const SubTitle = styled.h3`
  ${tw` 
    font-primary 
    text-white
    text-lg
    text-accent
    font-semibold
    mb-1
  `}
`;

export const SubInfo = styled.p`
  ${tw`
    text-white 
    font-secondary 
    text-sm
  `}
`;

export const Genres = styled.div`
  ${tw`
    flex
    flex-wrap
  `}
`;

export const GenreItem = styled.span`
  a{
    ${tw`
      text-white
      inline-flex
      items-center
      justify-center
      mr-10
    `}
  }

  svg{
    font-size: 22px;
    margin-right: 5px;
  }
`;