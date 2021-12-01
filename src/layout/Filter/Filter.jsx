import React from 'react';
import Select from 'react-select';
import { SelectStyle } from './Filter.style';
import { Container } from '../../shared/Flexi';

const options = [
  {
    value: 'popularity.asc',
    label: 'Popularity Ascending',
  },
  {
    value: 'popularity.desc',
    label: 'Popularity Descending',
  },
  {
    value: 'release_date.asc',
    label: 'Release Date Ascending',
  },
  {
    value: 'release_date.desc',
    label: 'Release Date Descending',
  },
  {
    value: 'vote_average.asc',
    label: 'Rating Ascending',
  },
  {
    value: 'vote_average.desc',
    label: 'Rating Descending',
  },
  {
    value: 'title.asc',
    label: 'Title(A-Z)',
  },
  {
    value: 'title.desc',
    label: 'Title(Z-A)',
  },
];

const Filter = () => {
  return (
    <Container>
      <SelectStyle>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
        />
      </SelectStyle>
    </Container>
  );
};

export default Filter;
