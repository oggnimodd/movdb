import React, { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { Container } from '../../shared/Flexi';
import {
  NavbarWrapper, Nav, NavBrand, MenuIcon, ToggleThemeButton,
} from './Navbar.style';
import Brand from '../../shared/Brand/Brand';
import Link from '../../shared/Link';
import { SideNavbarContext } from '../../context/sideNavbar.context';
import SearchBar from '../../shared/SearchBar/SearchBar';

const Navbar = () => {
  const { toggle } = useContext(SideNavbarContext);

  const handleSubmit = () => {

  };

  return (
    <NavbarWrapper>
      <Container>
        <Nav>

          {/* Mobile size Nav */}
          <NavBrand>
            <Link to="/">
              <Brand />
            </Link>
          </NavBrand>
          <MenuIcon onClick={toggle}>
            <AiOutlineMenu />
          </MenuIcon>

          {/* Big Screen Nav */}
          <SearchBar handleSubmit={handleSubmit} />

          <ToggleThemeButton>Dark Mode</ToggleThemeButton>
        </Nav>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
