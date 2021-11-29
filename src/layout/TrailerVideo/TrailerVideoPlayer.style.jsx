import tw, { styled } from 'twin.macro';

export const VideoPlayerWrapper = styled.div`
  ${tw`
    absolute 
    w-full 
    h-screen
    top-0 
    left-0
  `}

  z-index: 9999;
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
