import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`
      antialiased 
      bg-primary 
    `}

    ::-webkit-scrollbar {
      width: 0.4rem;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #0472b3, #09305e, #c5c8e0);
      border-radius: 3px;
    }
  }

  :root{
    scrollbar-color: #0472b3 transparent !important;
    scrollbar-width: thin !important;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
