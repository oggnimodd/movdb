import React, { useContext } from 'react';
import SideNavbar from './common/SideNavbar/SideNavbar';
import Main from './layout/Main/Main';
import Routes from './Routes';
import Navbar from './common/Navbar/Navbar';
import { Flex } from './layout/Flex';
import SideNavbarProvider from './context/sideNavbar.context';

const App = () => {
  return (
    <SideNavbarProvider>
      <Flex>
        <SideNavbar />
        <Main>
          <Navbar />
          {/* header and filter component here */}
          <Routes />
        </Main>
      </Flex>
    </SideNavbarProvider>
  );
};

export default App;
