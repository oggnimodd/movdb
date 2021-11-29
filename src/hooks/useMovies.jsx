import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';
import { genres } from '../data/genres';

const validateGenre = (id) => {
  const inGenres = genres.filter((i) => i.name.toLowerCase() === id);
  return inGenres.length;
};

const createURL = (type, page, params, search) => {
  const query = {
    page: '',
    sort_by: 'popularity.desc',
    api_key: apiKey,
    adult: false,
  };

  let url;
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
    }
  }

  if(type === 'search') {
    if(search) {
      query.query = search;
      url = `${baseURL}search/movie?${queryString.stringify(query)}`;
    }
  }

  return url;
};

const useMovies = (type) => {
  const history = useHistory();

  // need location to get query and page
  const l = useLocation();
  const params = useParams();
  const { pathname: location, search } = l;

  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const parsed = queryString.parse(search);
  const { page, query } = parsed;
  const url = createURL(type, page, params, query);

  if(!url) {
    history.push('/404');
  }

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
    setLoading(true);
    getMovies();
  }, [l]);

  return {
    movies, error, loading,
  };
};

export default useMovies;
