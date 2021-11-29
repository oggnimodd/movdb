import React from 'react';
import { Portal } from 'react-portal';
import YouTube from 'react-youtube';
import { GrFormClose } from 'react-icons/gr';
import Backdrop from '../../common/Backdrop';
import { VideoPlayerWrapper, FrameWrapper, ExitButton } from './TrailerVideoPlayer.style';

const TrailerVideoPlayer = ({ videos, showTrailer, closeTrailer }) => {
  const video = videos.results.filter((i) => i.type === 'Trailer')[0];
  const ytKey = video?.key;

  if(!showTrailer || !ytKey || videos.lenght === 0) return null;

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Portal>
      <VideoPlayerWrapper>
        <Backdrop
          handleClose={closeTrailer}
          open={showTrailer}
        />
        <FrameWrapper>
          <YouTube
            containerClassName="youtubeContainer"
            videoId={ytKey}
            opts={opts}
          />
        </FrameWrapper>
        <ExitButton onClick={closeTrailer}>
          <GrFormClose />
        </ExitButton>
      </VideoPlayerWrapper>
    </Portal>
  );
};

export default TrailerVideoPlayer;
