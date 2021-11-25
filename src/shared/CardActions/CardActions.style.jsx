import tw, { styled } from 'twin.macro';
import { colors } from '../../constants/colors';
import { breakpoints } from '../../constants/breakpoints';

export const CardActionsWrapper = styled.div`
  ${tw`
    absolute 
    top-0
    m-2 
  `}
  
  right: 15px;
`;

export const Icon = styled.button`
  ${tw`
    inline-block
    rounded-full
    text-black
    z-50 
    flex
    items-center 
    justify-center
  `}

  width: 20px;
  height: 20px;
  background: #9EA5BB;
  opacity: 0.8;

  &:hover{
    ${tw`
      bg-accent
      opacity-100  
    `}
  }
`;

export const Actions = styled.div`
  ${tw`
    absolute
    right-0
    bg-white
    py-2
    mt-2
    rounded-sm
    z-50
  `}

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  /* Very small screen */
  @media screen and (max-width:320px){
    right: -50px;
  }

`;

export const ActionItem = styled.button`
  ${tw`
    py-2
    lg:py-3
    px-2
    hover:bg-accent
    text-left
    font-primary
    font-semibold
    text-black
    text-sm 
    flex
    items-center
  `}

  width: 150px;

  @media screen and (min-width:${breakpoints.lg}px){
    width: 170px;
  }

  svg{
    font-size: 18px;
    fill:${colors.primary};
  }

  &:nth-of-type(2){
    svg{
      font-size: 20px;
    }
  }
`;

export const ActionIcon = styled.span`
  ${tw`
    mr-2  
    text-center
  `}
`;
