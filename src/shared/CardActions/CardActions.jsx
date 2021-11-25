import React, { useState, useRef } from 'react';
import { BsThreeDots, BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import {
  CardActionsWrapper, Icon, Actions, ActionItem, ActionIcon,
} from './CardActions.style';
import useClickOutside from '../../hooks/useClickOutside';

const CardActions = ({ id }) => {
  const [show, setShow] = useState(false);
  const actionRef = useRef();

  const toggleMenu = (e) => {
    setShow(!show);
  };
  const closeMenu = (e) => setShow(false);

  // Close action menu on click outside
  useClickOutside(actionRef, closeMenu);

  // Localstorage

  return (
    <CardActionsWrapper ref={actionRef}>
      <Icon onClick={toggleMenu}>
        <BsThreeDots />
      </Icon>
      {
        show
        && (
          <Actions>
            <ActionItem>
              <ActionIcon>
                <BsFillBookmarkFill />
              </ActionIcon>
              Watchlist
            </ActionItem>
            <ActionItem>
              <ActionIcon>
                <AiFillHeart />
              </ActionIcon>
              Favorite
            </ActionItem>
          </Actions>
        )
      }
    </CardActionsWrapper>
  );
};

export default CardActions;
