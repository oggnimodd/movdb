import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import { baseURL, apiKey } from '../config/movieAPI';

const createURL = (id) => {
  const query = {
    api_key: apiKey,
    append_to_response: 'movie_credits',
  };

  const url = `${baseURL}person/${id}?${queryString.stringify(query)}`;

  return url;
};

const usePerson = () => {
  const { personID } = useParams();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [details, setDetails] = useState();

  const url = createURL(personID);

  useEffect(() => {
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

    setLoading(true);
    getMovieDetails();
  }, [personID]);

  return {
    details, error, loading,
  };
};

export default usePerson;
