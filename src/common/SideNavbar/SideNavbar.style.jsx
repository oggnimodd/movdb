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
    fixed
    sm:sticky
    top-0 
    -translate-x-full
    sm:translate-x-0
    flex
    flex-col
    select-none
  `}

  ${({ show }) => show && tw`translate-x-0`}
  z-index: 8888;
  transition: all 300ms ease-in-out; 
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
    pt-2
  `}

  /* Hide default scrollbar and use plugin */
  scrollbar-width: none; /* Firefox 64 */
  -ms-overflow-style: none; /* IE 11 */

  &::-webkit-scrollbar{
    display: none; // chrome
  }
`;

export const Brand = styled.h1`
  ${tw`
    text-3xl 
    text-white
    font-primary
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
    mx-5
  `}

  ${({ mobileOnly }) => mobileOnly && tw`sm:hidden block`}
`;

export const SubSectionHeader = styled.h2`
  ${tw`
    font-bold
    font-primary
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
    font-secondary
    font-medium
    outline-none
    flex
    items-center
    border-2
    rounded-3xl
    border-transparent
  `}

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
