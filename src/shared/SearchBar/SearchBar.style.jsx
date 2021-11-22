import tw, { styled } from 'twin.macro';

export const SearchBarStyled = styled.div`
  ${({ sideNavbar }) => !sideNavbar && tw`sm:block hidden`}

  form {
    ${tw`
      relative 
    `}
  }

  button {
    ${tw`
      ml-3
      absolute
      left-0
      top-1/2 
      -translate-y-1/2  
      text-xl
    `}
  }

  input{
    ${tw`
      bg-transparent 
      outline-none
      pl-9 
      font-primary
      border
      border-white 
      py-2
      pl-9 
      pr-4
      rounded-3xl
      inline-block
    `}

    &:focus {
      ${tw`border-accent`}
    }

    &:focus + button{
      ${tw`text-accent`}
    }

    ${({ sideNavbar }) => (sideNavbar ? tw`w-full` : tw`w-72`)};
  }
`;
