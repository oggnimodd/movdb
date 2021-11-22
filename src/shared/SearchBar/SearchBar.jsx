import React, { useRef, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchBarStyled } from './SearchBar.style';

const SearchBar = ({ sideNavbar }) => {
  const searchRef = useRef();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = searchRef.current.value;

    history.push(`/search?query=${value}`);
    searchRef.current.value = '';
  };

  return (
    <SearchBarStyled sideNavbar={sideNavbar}>
      <form onSubmit={handleSubmit}>
        <input
          ref={searchRef}
          placeholder="Search for a movie"
          type="search"
        />
        <button> <BiSearch /></button>
      </form>
    </SearchBarStyled>
  );
};

export default SearchBar;
