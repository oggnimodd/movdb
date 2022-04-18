import tw, { styled } from 'twin.macro';
import { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';

export const VideoPlayerWrapper = styled.div`
  ${tw`
    fixed 
    w-full 
    h-screen
    top-0 
    left-0
  `}

  z-index: 9999;
`;

const fadeIn = keyframes`
    0% {
      opacity: 0
    }
    
    100% {
      opacity: 1
    }
`;

export const FrameWrapper = styled.div`
  ${tw`
    w-full
    h-full
    relative
    flex
    justify-center 
    items-center
    py-20
  `}

  .youtubeContainer {
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #666363;
    animation: ${fadeIn} ease-in-out 200ms;

    ${tw`
      w-11/12
      lg:w-8/12
    `}
  }

  .youtubeContainer iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index : 1000;
  }
`;

export const ExitButton = styled.button`
  ${tw`
    absolute
    top-0 
    right-0
    text-4xl
    text-white
    bg-accent
    rounded-full
    top-5
  `}

  svg{
    fill: ${colors.accent};
  }

  right: 50%;
  transform: translateX(50%);
  z-index : 1000;
`;
