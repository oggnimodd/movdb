import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchBarStyled } from './SearchBar.style';

const SearchBar = ({ handleSubmit, sideNavbar }) => {
  return (
    <SearchBarStyled sideNavbar={sideNavbar}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a movie"
          type="search"
        />
        <button> <BiSearch /></button>
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
