import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { ListContext } from './useShelf';

// Toast Message
export const ToastMessage = ({
  title, type, connect, messageOnly,
}) => {
  if(messageOnly) {
    return (
      <>
        <b className="toast-message-title">
          {title}
        </b>
        <br />
      </>
    );
  }

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

const useMovieActions = (details) => {
  const [inFavorite, setInFavorite] = useState();
  const [inWatchlist, setInWatchlist] = useState();

  const { addToUI, removeFromUI } = useContext(ListContext) || {};

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
    let isSubscribe = true;
    // Check if shelf exist
    const local = localStorage.getItem('shelf');
    const localObject = JSON.parse(local);
    const watchlist = localObject ? localObject.watchlist : [];
    const favorites = localObject ? localObject.favorites : [];

    // check if item already exist
    const isWatchlist = watchlist.find((i) => i.id === details.id);
    const isFavorite = favorites.find((i) => i.id === details.id);

    if(isSubscribe) {
      isWatchlist && setInWatchlist(true);
      isFavorite && setInFavorite(true);
    }

    return () => isSubscribe = false;
  }, []);

  return {
    inFavorite, inWatchlist, toggleAction,
  };
};

export default useMovieActions;
