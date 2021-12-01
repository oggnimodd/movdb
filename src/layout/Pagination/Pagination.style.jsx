import tw, { styled } from 'twin.macro';

export const PaginationWrapper = styled.div`
  ${tw`
    flex 
    mb-10
  `}
`;

export const Button = styled.button`
  ${tw`
    text-white 
    bg-accent  
    text-sm
    px-4 
    py-2 
    rounded-3xl 
    font-semibold
    font-secondary 
    flex 
    items-center
    opacity-100
  `}

  transition: opacity ease-in-out 100ms;

  ${({ next }) => (
    next && tw`ml-auto`)}

  svg {
    ${tw`
      text-sm
    `}

    ${({ next }) => (
    next
      ? tw`ml-2`
      : tw`mr-2`)}
  }
`;
