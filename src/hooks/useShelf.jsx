import React, {
  createContext, useState, useLayoutEffect,
} from 'react';

export const ListContext = createContext();

const DEFAULT_SHELF = {
  favorites: [],
  watchlist: [],
};

const ListProvider = ({ children }) => {
  const [list, setList] = useState();

  useLayoutEffect(() => {
    const local = localStorage.getItem('shelf');
    if(!local) {
      localStorage.setItem('shelf', JSON.stringify(DEFAULT_SHELF));
      setList(DEFAULT_SHELF);
    }else{
      setList(JSON.parse(local));
    }
  }, []);

  const addToUI = (item, type) => {
    list[type].push(item);

    setList({
      ...list,
    });
  };

  const removeFromUI = (item, type) => {
    const prevList = list[type];
    const newList = prevList.filter((i) => i.id !== item.id);

    list[type] = newList;

    setList({
      ...list,
    });
  };

  return (
    <ListContext.Provider value={{ list, addToUI, removeFromUI }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
