import React, { useContext, useEffect } from 'react';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Link from '../../shared/Link';
import {
  SideNavbarWrapper, Inner, SubSection, SubSectionHeader, NavLink,
} from './SideNavbar.style';
import Backdrop from '../Backdrop';
import { categories } from '../../data/categories';
import { SideNavbarContext } from '../../context/sideNavbar.context';
import { breakpoints } from '../../constants/breakpoints';
import Brand from '../../shared/Brand/Brand';
import SearchBar from '../../shared/SearchBar/SearchBar';

const SideNavbar = () => {
  const { show, close } = useContext(SideNavbarContext);

  useEffect(() => {
    const closeSidebarOnLargeScreen = (e) => {
      if(window.innerWidth >= breakpoints.sm) {
        close();
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);

    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
    };
  }, []);

  return (
    <>
      <Backdrop
        open={show}
        handleClose={close}
      />

      <SideNavbarWrapper
        show={show}
      >
        <Link to="/">
          <Brand />
        </Link>
        <Inner>
          <Scrollbars
            renderThumbVertical={(props) => (
              <div
                {...props}
                className="custom-scrollbar-vertical"
              />
            )}
          >
            <SubSection mobileOnly>
              <SubSectionHeader>
                EXPLORE
              </SubSectionHeader>
              <SearchBar sideNavbar />
            </SubSection>

            <SubSection>
              <SubSectionHeader>
                DISCOVER
              </SubSectionHeader>
              <NavLink to="/discover/popular"><MdOutlineMovieFilter />Popular</NavLink>
              <NavLink to="/discover/top-rated"><MdOutlineMovieFilter />Top Rated</NavLink>
              <NavLink to="/discover/upcoming"><MdOutlineMovieFilter />Upcoming</NavLink>
            </SubSection>
            <SubSection>
              <SubSectionHeader>
                GENRES
              </SubSectionHeader>
              {
              categories && categories.map((item) => {
                return (
                  <NavLink
                    to={`/genres/${item.name.toLowerCase()}`}
                    key={item.id}
                  >
                    <MdOutlineMovieFilter />
                    {item.name}
                  </NavLink>
                );
              })
            }
            </SubSection>
            <SubSection>
              <SubSectionHeader>
                SHELF
              </SubSectionHeader>
              <NavLink to="/favorites">
                <MdOutlineMovieFilter />
                Favorites
              </NavLink>
              <NavLink to="watch-later">
                <MdOutlineMovieFilter />Watch Later
              </NavLink>
            </SubSection>
          </Scrollbars>
        </Inner>

      </SideNavbarWrapper>
    </>
  );
};

export default SideNavbar;
