import { Link as RRLink, NavLink as RRNavLink } from 'react-router-dom';
import React from 'react';

export const NavLink = (props) => {
  const { children, closeNavbar, ...rest } = props;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
