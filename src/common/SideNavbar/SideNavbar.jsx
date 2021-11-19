import React, { useContext } from 'react';
import { MdOutlineMovieFilter } from 'react-icons/md';
import Link from '../../shared/Link';
import {
  SideNavbarWrapper, Brand, Inner, SubSection, SubSectionHeader, NavLink,
} from './SideNavbar.style';
import Backdrop from '../Backdrop';
import { categories } from '../../data/categories';
import { SideNavbarContext } from '../../context/sideNavbar.context';

const SideNavbar = () => {
  const { show, close } = useContext(SideNavbarContext);

  return (
    <>
      <Backdrop
        open={show}
        handleClose={close}
      />

      <SideNavbarWrapper show={show}>
        <Link to="/">
          <Brand>
            Mov
            <span>
              DB
            </span>
          </Brand>
        </Link>
        <Inner>
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
        </Inner>
      </SideNavbarWrapper>
    </>
  );
};

export default SideNavbar;
