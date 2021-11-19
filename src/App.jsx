import React, { useContext } from 'react';
import SideNavbar from './common/SideNavbar/SideNavbar';
import Main from './layout/Main/Main';
import Routes from './Routes';
import Navbar from './common/Navbar/Navbar';
import { Flex } from './layout/Flex';
import SideNavbarProvider, { SideNavbarContext } from './context/sideNavbar.context';

const Button = ({ children }) => {
  const { toggle } = useContext(SideNavbarContext);

  return (
    <button onClick={toggle}>
      {children}
    </button>
  );
};

const App = () => {
  return (
    <SideNavbarProvider>
      <Flex>
        <SideNavbar />
        <Main>
          <Button>Toggle</Button>
          <Navbar />
          {/* header and filter component here */}

          <Routes />
        </Main>
      </Flex>
    </SideNavbarProvider>
  );
};

export default App;
