import React, {
  useState, useRef,
} from 'react';
import { BsThreeDots, BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import {
  CardActionsWrapper, Icon, Actions, ActionItem, ActionIcon, IconWrapper,
} from './CardActions.style';
import useClickOutside from '../../hooks/useClickOutside';
import useMovieActions from '../../hooks/useMovieActions';

import 'react-toastify/dist/ReactToastify.css';

const CardActions = ({ details }) => {
  const [show, setShow] = useState(false);
  const actionRef = useRef();

  const toggleMenu = (e) => {
    setShow(!show);
  };
  const closeMenu = (e) => setShow(false);

  // Close action menu on click outside
  useClickOutside(actionRef, closeMenu);

  const { inFavorite, inWatchlist, toggleAction } = useMovieActions(details);

  return (
    <CardActionsWrapper ref={actionRef}>
      <IconWrapper onClick={toggleMenu}>
        <Icon>
          {show ? <GrFormClose /> : <BsThreeDots /> }
        </Icon>
      </IconWrapper>
      {
        show
        && (
          <Actions>
            <ActionItem
              added={inWatchlist}
              onClick={() => toggleAction('watchlist')}
            >
              <ActionIcon>
                {
                  inWatchlist
                    ? <BsFillBookmarkFill />
                    : <BsBookmark />
                }
              </ActionIcon>
              {inWatchlist
                ? 'Remove from '
                : 'Add To '}
              Watchlist
            </ActionItem>
            <ActionItem
              added={inFavorite}
              onClick={() => toggleAction('favorites')}
            >
              <ActionIcon>
                {
                  inFavorite
                    ? <AiFillHeart />
                    : <AiOutlineHeart />
                }
              </ActionIcon>
              {inFavorite
                ? 'Remove from '
                : 'Add To '}
              Favorites
            </ActionItem>
          </Actions>
        )
      }
    </CardActionsWrapper>
  );
};

export default CardActions;
