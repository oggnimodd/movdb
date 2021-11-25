import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const local = localStorage.getItem('shelf');
  const storageValue = JSON.parse(local);
  const [list, setList] = useState();

  useEffect(() => {
    setList(storageValue);
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
