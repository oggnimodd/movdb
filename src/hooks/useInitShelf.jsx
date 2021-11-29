import React, { useEffect } from 'react';

const useInitShelf = () => {
  useEffect(() => {
    const local = localStorage.getItem('shelf');
    if(!local) {
      localStorage.setItem('shelf', JSON.stringify({
        favorites: [],
        watchlist: [],
      }));
    }
  }, []);

  return null;
};

export default useInitShelf;
