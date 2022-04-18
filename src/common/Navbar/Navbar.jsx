import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Container } from '../../shared/Flexi';
import {
  NavbarWrapper, Nav, NavBrand, MenuIcon, BackButton, Space,
} from './Navbar.style';
import Brand from '../../shared/Brand/Brand';
import Link from '../../shared/Link';
import { SideNavbarContext } from '../../context/sideNavbar.context';
import SearchBar from '../../shared/SearchBar/SearchBar';

const Navbar = () => {
  const { toggle } = useContext(SideNavbarContext);
  const history = useHistory();

  const goToPrevPage = () => {
    history.goBack();
  };

  return (
    <>
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
            <SearchBar />

            <BackButton onClick={goToPrevPage}>
              <FaArrowLeft />
              <span>Go Back</span>
            </BackButton>

          </Nav>
        </Container>
      </NavbarWrapper>
      <Space />
    </>
  );
};

export default Navbar;
