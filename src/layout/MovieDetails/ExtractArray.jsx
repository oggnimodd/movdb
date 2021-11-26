import React from 'react';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Genres, GenreItem } from './MovieDetails.style';

export const RenderGenres = ({ genres }) => {
  return (
    <Genres>
      {
        genres && genres.map((i) => {
          return (
            <GenreItem key={i.id}>
              <Link to={`/genre/${i.name.toLowerCase()}`}>
                <MdOutlineMovieFilter />
                {i.name}
              </Link>
            </GenreItem>
          );
        })
      }
    </Genres>
  );
};
