import tw, { styled } from 'twin.macro';

export const NavbarWrapper = styled.div`
  ${tw`
    w-full
    bg-secondary 
    absolute 
    top-0 
    left-0
    sticky
  `}

  z-index: 7777;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Nav = styled.nav`
  ${tw`
    flex
    w-full 
    items-center 
    justify-between
  `}

  height: 76px;
`;

export const NavBrand = styled.div`
  ${tw`
    sm:hidden
  `}
`;

export const MenuIcon = styled.button`
  ${tw`
    text-3xl
    sm:hidden
  `}
`;

export const ToggleThemeButton = styled.button`
  ${tw`
    rounded-full
    bg-accent
    text-sm 
    px-4 
    py-2 
    hidden
    sm:block
  `}
`;
