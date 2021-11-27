import React from 'react';
import { ContainerStyle } from './Container.style';

const Container = ({
  children, padding, ...restProps
}) => {
  return (
    <ContainerStyle
      className="container"
      {...restProps}
    >
      {children}
    </ContainerStyle>
  );
};

export default Container;
