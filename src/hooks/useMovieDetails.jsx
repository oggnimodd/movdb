import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';

const createURL = (id) => {
  const query = {
    api_key: apiKey,
    append_to_response: 'credits,videos,recommendations',
  };

  const url = `${baseURL}movie/${id}?${queryString.stringify(query)}`;

  return url;
};

const useMovieDetails = () => {
  const { movieID } = useParams();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [details, setDetails] = useState();

  const url = createURL(movieID);

  const getMovieDetails = async () => {
    try {
      // call movie api here
      const res = await fetch(url);
      const json = await res.json();

      if(!res.ok) {
        setError(true);
      }else{
        setDetails(json);
        setError(false);
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
      setLoading(true);
      getMovieDetails();
    }

    return () => isSubscribed = false;
  }, [movieID]);

  return {
    details, error, loading,
  };
};

export default useMovieDetails;
