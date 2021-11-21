import React from 'react';
import { MainWrapper } from './Main.stye';
import { Container } from '../../shared/Flexi';

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

export default Main;
