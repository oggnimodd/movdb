import React from 'react';
import { ToastContainer } from 'react-toastify';
import { StyledToast } from './CustomToast.style';

const CustomToast = () => {
  return (
    <StyledToast
      limit={3}
      autoClose={2000}
      position="bottom-center"
    />
  );
};

export default CustomToast;
