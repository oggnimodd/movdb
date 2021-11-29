import React, { useRef, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchBarStyled } from './SearchBar.style';
import { SideNavbarContext } from '../../context/sideNavbar.context';

const SearchBar = ({ sideNavbar }) => {
  const searchRef = useRef();
  const history = useHistory();
  const { close } = useContext(SideNavbarContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = searchRef.current.value;

    history.push(`/search?query=${value}`);
    searchRef.current.value = '';
    searchRef.current.blur();
    close();
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
