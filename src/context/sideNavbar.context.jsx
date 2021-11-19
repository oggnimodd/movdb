import React, { createContext, useReducer } from 'react';

const initialState = {
  show: false,
};

export const SideNavbarContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        show: !state.show,
      };
    case 'OPEN':
      return {
        ...state,
        show: true,
      };
    case 'CLOSE':
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

const SideNavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const open = () => dispatch({ type: 'OPEN' });
  const close = () => dispatch({ type: 'CLOSE' });
  const toggle = () => dispatch({ type: 'TOGGLE' });

  return (
    <SideNavbarContext.Provider
      value={{
        show: state.show, open, close, toggle,
      }}
    >
      {children}
    </SideNavbarContext.Provider>
  );
};

export default SideNavbarProvider;
