import React, { useContext } from 'react';
import { Link as RRLink, NavLink as RRNavLink } from 'react-router-dom';
import { SideNavbarContext } from '../context/sideNavbar.context';

export const NavLink = (props) => {
  const { children, closeNavbar, ...rest } = props;
  const { close } = useContext(SideNavbarContext);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    close();
  };

  return (
    <RRNavLink
      onClick={scrollToTop}
      activeClassName="link-active"
      {...rest}
    >
      {children}
    </RRNavLink>
  );
};

const Link = (props) => {
  const { children, ...rest } = props;
  const { close } = useContext(SideNavbarContext);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    close();
  };

  return (
    <RRLink
      onClick={scrollToTop}
      {...rest}
    >
      {children}
    </RRLink>
  );
};

export default Link;
