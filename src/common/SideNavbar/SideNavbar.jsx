import React, { useContext, useEffect } from 'react';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';
import { BsCalendar3, BsBookmark } from 'react-icons/bs';
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
        {/* Top Section navbar */}
        <Link to="/">
          <Brand />
        </Link>

        {/* Scrollable section */}
        <Inner>

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
            <NavLink to="/discover/popular"><AiOutlineStar />Popular</NavLink>
            <NavLink to="/discover/top-rated"><FiBarChart2 />Top Rated</NavLink>
            <NavLink to="/discover/upcoming"><BsCalendar3 />Upcoming</NavLink>
          </SubSection>

          <SubSection>
            <SubSectionHeader>
              SHELF
            </SubSectionHeader>
            <NavLink to="/favorites">
              <AiOutlineHeart />
              Favorites
            </NavLink>
            <NavLink to="/watch-list">
              <BsBookmark />Watchlist
            </NavLink>
          </SubSection>

          <SubSection>
            <SubSectionHeader>
              GENRES
            </SubSectionHeader>
            {
              categories && categories.map((item) => {
                return (
                  <NavLink
                    to={`/genre/${item.name.toLowerCase()}`}
                    key={item.id}
                  >
                    <MdOutlineMovieFilter />
                    {item.name}
                  </NavLink>
                );
              })
            }
          </SubSection>
        </Inner>

      </SideNavbarWrapper>
    </>
  );
};

export default SideNavbar;
