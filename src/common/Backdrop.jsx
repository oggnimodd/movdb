import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

export const Overlay = styled.div`
  ${tw`
    fixed 
    w-full
    h-screen
    left-0
    top-0
    bg-black
    opacity-50
  `}
  z-index: 888;
`;

const Backdrop = ({ children, open, handleClose }) => {
  if(!open)return null;

  return (
    <Overlay
      onClick={handleClose}
      open={open}
    >
      {children}
    </Overlay>
  );
};

export default Backdrop;
