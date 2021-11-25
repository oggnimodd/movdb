import React, { useState, useEffect } from 'react';

const useShelf = (type) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const local = localStorage.getItem('shelf');
  const localObject = JSON.parse(local);
  const list = localObject[type];

  const getMovies = async () => {
    try {
      setMovies(list);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return {
    movies, error, loading,
  };
};

export default useShelf;
