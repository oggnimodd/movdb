import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchBarStyled } from './SearchBar.style';

const SearchBar = ({ handleSubmit, sideNavbar }) => {
  return (
    <SearchBarStyled sideNavbar={sideNavbar}>
      <form onSubmit={handleSubmit}>
        <button> <BiSearch /></button>
        <input
          placeholder="Search for a movie"
          type="search"
        />
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
