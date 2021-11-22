import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';

const createURL = (type, page, params) => {
  const query = {
    page: '',
    sort_by: 'popularity.desc',
    api_key: apiKey,
  };

  if(type === 'discover') {
    let { discoverID } = params;
    discoverID = discoverID === 'top-rated' ? 'top_rated' : discoverID;

    query.page = page || 1;
    const url = `${baseURL}movie/${discoverID}?${queryString.stringify(query)}`;
    console.log(url);
    return url;
  }
};

const useMovies = (type) => {
  // need location to get query and page
  const l = useLocation();
  const params = useParams();
  const { pathname: location, search } = l;

  const [movies, setMovies] = useState();
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  const parsed = queryString.parse(search);
  const { page } = parsed;
  const url = createURL(type, page, params);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // call movie api here
        const res = await fetch(url);
        const json = await res.json();
        setMovies(json);
        setError(false);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    getMovies();
  }, [location]);

  return {
    movies, error, loading,
  };
};

export default useMovies;
