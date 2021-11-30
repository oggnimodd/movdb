import React from 'react';
import { BsFillBookmarkFill, BsPlayFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart, AiOutlineLink } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import { colors } from '../../constants/colors';
import useMovieActions, { ToastMessage } from '../../hooks/useMovieActions';
import { scoreColors } from '../../util/scoreColor';

import {
  ActionsWrapper,
  ActionButton,
  PlayButton,
  PlayAction,
  Text,
  StyledTooltip,
  Score,
} from './MovieActions.style';

const Tooltip = ({ id, msg }) => {
  return(
    <ReactTooltip
      backgroundColor={colors.accent}
      id={id}
      type="dark"
      effect="solid"
    >
      <StyledTooltip>{msg}</StyledTooltip>
    </ReactTooltip>
  );
};

const MovieActions = ({ details, openTrailer, video }) => {
  const { inFavorite, inWatchlist, toggleAction } = useMovieActions(details);
  const { vote_average: point } = details;
  const scoreBg = scoreColors(point);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);

    toast(<ToastMessage
      title="Link Copied !"
      messageOnly
    />, {
      className: 'add',
    });
  };

  return (
    <ActionsWrapper>
      {
        video && (
        <PlayAction onClick={openTrailer}>
          <PlayButton>
            <BsPlayFill />
          </PlayButton>
          <Text>Play Trailer</Text>
        </PlayAction>
        )
      }

      <Score
        bg={scoreBg}
      >
        {point !== 0 ? point.toFixed(1) : 'NR'}
      </Score>

      <a
        data-tip
        data-for="bookmarkAction"
      >
        <Tooltip
          id="bookmarkAction"
          msg={inWatchlist
            ? 'Remove from watchlist'
            : 'Add to watchlist'}
        />
        <ActionButton
          onClick={() => toggleAction('watchlist')}
          fz={21}
        >
          {
            inWatchlist
              ? <BsFillBookmarkFill />
              : <FiBookmark />
          }
        </ActionButton>
      </a>

      <a
        data-tip
        data-for="favoriteAction"
      >
        <Tooltip
          id="favoriteAction"
          msg={inFavorite
            ? 'Remove from favorites'
            : 'Add to favorites'}
        />
        <ActionButton
          onClick={() => toggleAction('favorites')}
          fz={23}
        >
          {
            inFavorite
              ? <AiFillHeart />
              : <AiOutlineHeart />
          }
        </ActionButton>
      </a>

      <a
        data-tip
        data-for="copylinkAction"
      >
        <Tooltip
          id="copylinkAction"
          msg="Share link"
        />
        <ActionButton
          onClick={copyLink}
          fz={21}
        >
          <AiOutlineLink />
        </ActionButton>
      </a>

    </ActionsWrapper>
  );
};

export default MovieActions;
