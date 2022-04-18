import React from 'react';
import SideNavbar from './common/SideNavbar/SideNavbar';
import Main from './layout/Main/Main';
import Routes from './Routes';
import Navbar from './common/Navbar/Navbar';
import { Flex } from './layout/Flex';
import SideNavbarProvider from './context/sideNavbar.context';
import CustomToast from './shared/CustomToast/CustomToast';
import ListProvider from './hooks/useShelf';

const App = () => {
  return (
    <SideNavbarProvider>
      <CustomToast />
      <Flex>
        <SideNavbar />
        <Main>
          <Navbar />
          {/* header and filter component here */}
          <ListProvider>
            <Routes />
          </ListProvider>
        </Main>
      </Flex>
    </SideNavbarProvider>
  );
};

export default App;
