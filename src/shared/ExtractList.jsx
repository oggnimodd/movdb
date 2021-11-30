import React from 'react';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  ListFlex,
  GenreItem,
  RenderItem,
  CountryItem,
} from './Details';

export const RenderGenres = ({ genres }) => {
  return (
    <ListFlex>
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
    </ListFlex>
  );
};

export const RenderLanguages = ({ languages }) => {
  return (
    <ListFlex>
      {
        languages && languages.map((i) => {
          return (
            <RenderItem key={i.iso_639_1 + i.name}>
              {i.english_name}
            </RenderItem>
          );
        })
      }
    </ListFlex>
  );
};

const imdbURL = 'https://www.imdb.com/';

export const RenderLinks = ({ homepage, imdbID, domain }) => {
  const links = [
    {
      id: `website${homepage}`,
      name: 'Website',
      link: homepage,
      valid: homepage,
    },
    {
      id: `imdb-${imdbID}`,
      name: 'IMDb',
      link: `${imdbURL + domain}/${imdbID}`,
      valid: imdbID,
    },
  ];

  return (
    <ListFlex>
      {
        links && links.map((i) => {
          if (!i.valid) return null;

          return (
            <GenreItem key={i.id}>
              <a
                target="_blank"
                href={i.link}
                rel="noopener noreferrer"
              >
                <AiOutlineLink />
                {i.name}
              </a>
            </GenreItem>
          );
        })
      }
    </ListFlex>
  );
};

export const RenderCountries = ({ countries }) => {
  return (
    <ListFlex>
      {countries.length > 0 && countries.map((i) => {
        const code = i.iso_3166_1.toLowerCase();
        return(
          <CountryItem key={code}>
            <img
              src={`https://flagcdn.com/16x12/${code}.png`}
              alt={i.iso_3166_1}
            />
            {i.name}
          </CountryItem>
        );
      })}
    </ListFlex>
  );
};
