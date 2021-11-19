import React from 'react';
import Sidebar from './common/SideNavbar/SideNavbar';
import Main from './layout/Main/Main';
import Routes from './Routes';
import Navbar from './common/Navbar/Navbar';
import { Flex } from './layout/Flex';
import useSidenavbar from './hooks/useSideNavbar';

const App = () => {
  const { show, toggle } = useSidenavbar();

  return (
    <Flex>
      <Sidebar
        show={show}
        toggle={toggle}
      />
      <Main>
        <button onClick={toggle}>Toggle</button>
        <Navbar />
        {/* header and filter component here */}

        <Routes />
      </Main>
    </Flex>
  );
};

export default App;
