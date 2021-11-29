import tw, { styled } from 'twin.macro';

export const ActionsWrapper = styled.div`
  ${tw`
    flex
    mb-5
    gap-3
  `}

  /* Disable Tooltip On Small Screen */
  .__react_component_tooltip {
    ${tw`
      hidden
      sm:inline-block
    `}
  }
`;

export const ActionButton = styled.button`
  ${tw`
    rounded-full
    flex
    items-center
    justify-center
    bg-accent
  `}

  &:hover{
    background: #417ec4;
  }

  width: 40px;
  height: 40px;
  font-size: ${({ fz }) => fz || 20}px;
`;

export const PlayButton = styled.span`
  ${tw`
    bg-transparent
    text-2xl
    rounded-full
    flex
    items-center
    justify-center
    bg-accent
  `}
  &:hover{
    background: #417ec4;
  }

  width: 40px;
  height: 40px;
  font-size: ${({ fz }) => fz || 20}px;
`;

export const PlayAction = styled.button`
  ${tw`
    flex
    items-center
    bg-accent 
    pl-3 
    pr-5
    rounded-full
    mb-5
  `}

  &:hover{
    background: #417ec4;
  }
`;

export const Text = styled.p`
  ${tw`
    font-primary
    text-lg
    font-semibold
  `}
`;

export const StyledTooltip = styled.span`
  ${tw`
    font-primary
    text-base
    font-semibold
  `}
`;
