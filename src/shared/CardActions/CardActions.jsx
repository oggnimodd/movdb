import React, { useState, useRef } from 'react';
import { BsThreeDots, BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineConsoleSql } from 'react-icons/ai';
import {
  CardActionsWrapper, Icon, Actions, ActionItem, ActionIcon,
} from './CardActions.style';
import useClickOutside from '../../hooks/useClickOutside';

const CardActions = ({ details }) => {
  const [show, setShow] = useState(false);
  const actionRef = useRef();

  const toggleMenu = (e) => {
    setShow(!show);
  };
  const closeMenu = (e) => setShow(false);

  // Close action menu on click outside
  useClickOutside(actionRef, closeMenu);

  // Localstorage
  const toggleAction = (type) => {
    // Check if shelf exist
    const local = localStorage.getItem('shelf');

    const localObject = JSON.parse(local);
    const list = localObject[type];

    // check if item already exist
    const isExist = list.find((i) => i.id === details.id);

    // if not exist add to localstorage
    if(!isExist) {
      list.push(details);
      localStorage.setItem('shelf', JSON.stringify({
        ...localObject,
        [type]: list,
      }));
    }else{
      // if  exist delete from localstorage
      const newList = list.filter((i) => i.id !== details.id);
      localStorage.setItem('shelf', JSON.stringify({
        ...localObject,
        [type]: newList,
      }));
    }
  };

  return (
    <CardActionsWrapper ref={actionRef}>
      <Icon onClick={toggleMenu}>
        <BsThreeDots />
      </Icon>
      {
        show
        && (
          <Actions>
            <ActionItem onClick={() => toggleAction('watchlist')}>
              <ActionIcon>
                <BsFillBookmarkFill />
              </ActionIcon>
              Watchlist
            </ActionItem>
            <ActionItem onClick={() => toggleAction('favorites')}>
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
