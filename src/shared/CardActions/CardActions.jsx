import React, { useState, useRef } from 'react';
import { BsThreeDots, BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  CardActionsWrapper, Icon, Actions, ActionItem, ActionIcon,
} from './CardActions.style';
import useClickOutside from '../../hooks/useClickOutside';
import 'react-toastify/dist/ReactToastify.css';

// Toast Message
const ToastMessage = ({ title, type, connect }) => {
  return (
    <>
      <b className="toast-message-title">
        {title}
      </b>
      <br />
      {connect}
      <br />
      <b className="toast-message-type">{type}</b>
    </>
  );
};

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
      toast(<ToastMessage
        title={details.title}
        type={type}
        connect="added to"
      />, {
        className: 'add',
      });
    }else{
      // if  exist delete from localstorage
      const newList = list.filter((i) => i.id !== details.id);
      localStorage.setItem('shelf', JSON.stringify({
        ...localObject,
        [type]: newList,
      }));
      toast(<ToastMessage
        title={details.title}
        type={type}
        connect="removed from"
      />, {
        className: 'remove',
      });
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
