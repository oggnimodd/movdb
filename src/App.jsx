import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
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
          <Scrollbars
            autoHide
            autoHideDuration={200}
            renderThumbVertical={(props) => (
              <div
                {...props}
                className="custom-scrollbar-vertical"
              />
            )}
            renderTrackVertical={(props) => (
              <div
                {...props}
                className="track-vertical-body"
              />
            )}
          >
            <Navbar />
            {/* header and filter component here */}
            <Routes />
          </Scrollbars>
        </Main>
      </Flex>
    </SideNavbarProvider>
  );
};

export default App;
