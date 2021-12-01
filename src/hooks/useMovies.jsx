/* eslint-disable no-return-assign */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';
import { genres } from '../data/genres';

const validateGenre = (id) => {
  const inGenres = genres.filter((i) => i.name.toLowerCase() === id);
  return inGenres.length;
};

const createURL = (type, page, params, search, filter) => {
  const query = {
    page: '',
    sort_by: filter,
    api_key: apiKey,
    adult: false,
  };

  let url;
  let memoGenre;
  query.page = page || 1;

  if(type === 'discover') {
    let { discoverID } = params;
    discoverID = discoverID === 'top-rated' ? 'top_rated' : discoverID;

    url = `${baseURL}movie/${discoverID}?${queryString.stringify(query)}`;
  }

  if(type === 'genre') {
    const { genreID } = params;
    if(validateGenre(genreID)) {
      const genre = genres.filter((i) => i.name.toLowerCase() === genreID)[0].id;
      query.with_genres = genre;
      url = `${baseURL}discover/movie?${queryString.stringify(query)}`;
      memoGenre = genre;
    }
  }

  if(type === 'search') {
    if(search) {
      query.query = search;
      url = `${baseURL}search/movie?${queryString.stringify(query)}`;
    }
  }

  return { url, memoGenre };
};

const defaultFilter = 'popularity.desc';

const useMovies = (type) => {
  const [filter, changeFilter] = useState(defaultFilter);
  const previousFilter = useRef(null);

  // need location to get query and page
  const location = useLocation();
  const params = useParams();
  const { search } = location;

  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const parsed = queryString.parse(search);
  const { page, query } = parsed;
  const { url, memoGenre } = createURL(type, page, params, query, filter);

  const getMovies = async () => {
    try {
      // call movie api here
      const res = await fetch(url);
      const json = await res.json();
      if(res.ok) {
        setMovies(json);
        setError(false);
      }else{
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    if(isSubscribed) {
      changeFilter(defaultFilter);
    }

    return () => isSubscribed = false;
  }, [memoGenre]);

  useEffect(() => {
    let isSubscribed = true;
    const a = filter === 'popularity.desc' && previousFilter.current === 'popularity.desc';

    if(filter !== previousFilter.current || a) {
      if(isSubscribed) {
        previousFilter.current = filter;
        setLoading(true);
        getMovies();
      }
    }else{
      setLoading(true);
    }

    return () => {
      isSubscribed = false;
    };
  }, [location, filter]);

  return {
    movies, error, loading, filter, changeFilter,
  };
};

export default useMovies;
