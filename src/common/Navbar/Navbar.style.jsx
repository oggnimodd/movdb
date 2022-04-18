import tw, { styled } from 'twin.macro';

export const Space = styled.div`
  ${tw`
    mt-[4.75rem]
  `}
`;

export const NavbarWrapper = styled.div`
  ${tw`
    bg-secondary 
    fixed
    w-full 
    h-[4.75rem]
    sm:w-[calc(100% - 230px)]
  `}

  /* width : calc(100% - 230px); */
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

export const BackButton = styled.button`
  ${tw`
    rounded-full
    bg-accent
    text-sm 
    px-4 
    py-2 
    hidden
    font-primary 
    font-semibold 
    sm:flex  
    items-center
  `}

  span {
    ${tw`
      ml-2
    `}
  }
`;
