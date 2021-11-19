import React, { useState, useEffect } from 'react';
import { breakpoints } from '../constants/breakpoints';

const useSidenavbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const closeSidebarOnLargeScreen = (e) => {
      if(window.innerWidth >= breakpoints.sm) {
        setShow(false);
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);
    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
    };
  }, []);

  return { show, toggle };
};

export default useSidenavbar;
