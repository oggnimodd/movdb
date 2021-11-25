import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { BsThreeDots, BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import {
  CardActionsWrapper, Icon, Actions, ActionItem, ActionIcon,
} from './CardActions.style';
import useClickOutside from '../../hooks/useClickOutside';
import { ListContext } from '../../hooks/useShelf';
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
  const [inFavorite, setInFavorite] = useState();
  const [inWatchlist, setInWatchlist] = useState();
  const [show, setShow] = useState(false);
  const actionRef = useRef();
  const { addToUI, removeFromUI } = useContext(ListContext) || {};

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
      type === 'favorites' ? setInFavorite(true) : setInWatchlist(true);
      addToUI(details, type);
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
      type === 'favorites' ? setInFavorite(false) : setInWatchlist(false);
      removeFromUI(details, type);
    }
  };

  // get watchlist and favorites state onmount
  useEffect(() => {
    // Check if shelf exist
    const local = localStorage.getItem('shelf');
    const localObject = JSON.parse(local);
    const watchlist = localObject.watchlist;
    const favorites = localObject.favorites;

    // // check if item already exist
    const isWatchlist = watchlist.find((i) => i.id === details.id);
    const isFavorite = favorites.find((i) => i.id === details.id);

    isWatchlist && setInWatchlist(true);
    isFavorite && setInFavorite(true);
  }, []);

  return (
    <CardActionsWrapper ref={actionRef}>
      <Icon onClick={toggleMenu}>
        <BsThreeDots />
      </Icon>
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
                  inWatchlist ? <BsFillBookmarkFill /> : <BsBookmark />
                }
              </ActionIcon>
              Watchlist
            </ActionItem>
            <ActionItem
              added={inFavorite}
              onClick={() => toggleAction('favorites')}
            >
              <ActionIcon>
                {
                  inFavorite ? <AiFillHeart /> : <AiOutlineHeart />
                }
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
