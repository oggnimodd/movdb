import tw, { styled } from 'twin.macro';
import { NavLink as Link } from '../../shared/Link';
import { breakpoints } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

export const SideNavbarWrapper = styled.aside`
  ${tw`
    bg-secondary
    h-screen
    w-9/12
    flex-shrink-0
    absolute
    sm:relative
    top-0 
    -translate-x-full
    sm:translate-x-0
    flex
    flex-col
    select-none
  `}

  ${({ show }) => show && tw`translate-x-0`}
  z-index: 999;
  transition: all 300ms ease-in-out; 

  @media screen and (min-width:${breakpoints
    .sm}px){
      width: 230px;
      transition: none;
  }
`;

export const Inner = styled.div`
  ${tw`
    w-full
    h-full
    overflow-y-scroll
    px-5
    py-2
  `}

  &::-webkit-scrollbar{
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: linear-gradient(to bottom, #0472b3, #09305e, #c5c8e0);
  }
`;

export const Brand = styled.h1`
  ${tw`
    text-3xl 
    text-white
    font-syne
    text-center
    font-semibold
    py-5
  `}

  span{
    ${tw`
      text-accent
    `}
  }
`;

export const SubSection = styled.div`
  ${tw`
    mb-10
    text-white
  `}
`;

export const SubSectionHeader = styled.h2`
  ${tw`
    font-bold
    font-syne
    mb-3 
    text-accent
  `}
`;

export const NavLink = styled(Link)`
  ${tw`
    px-3
    py-1 
    my-1
    text-sm
    font-montserrat
    font-medium
    outline-none
    flex
    items-center
    border-2
    rounded-3xl
    border-transparent
  `}
  transition: all ease-in-out 200ms;

  &.link-active, &:hover{
    ${tw`
      border-accent
      text-accent
    `}
  }

  /* logo/icon */
  svg{
    ${tw`mr-3`}
  }

`;
