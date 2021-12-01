import React from 'react';
import Select from 'react-select';
import {
  SelectStyle, FilterLabel, FilterTop, ResetButton,
} from './Filter.style';
import { Container } from '../../shared/Flexi';

const defaultFilter = 'popularity.desc';

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

const Filter = ({ filter, changeFilter }) => {
  // find index of default value
  const index = options.map((i) => i.value).indexOf(filter);
  const defaultValue = options[index];

  const handleChange = (e) => {
    changeFilter(e.value);
  };

  const resetFilter = (e) => {
    changeFilter(defaultFilter);
  };

  return (
    <Container>
      <FilterTop>
        <FilterLabel>Sort By</FilterLabel>
        {
          filter !== defaultFilter
          && (
            <ResetButton onClick={resetFilter}>
              Reset
            </ResetButton>
          )
        }
      </FilterTop>
      <SelectStyle>
        <Select
          onChange={handleChange}
          defaultValue={defaultValue}
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
        />
      </SelectStyle>
    </Container>
  );
};

export default Filter;
