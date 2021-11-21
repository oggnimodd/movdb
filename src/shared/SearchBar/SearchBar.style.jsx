import tw, { styled } from 'twin.macro';

export const SearchBarStyled = styled.form`
  ${({ sideNavbar }) => !sideNavbar && tw`sm:block hidden`}

  form {
    ${tw`
      relative 
      rounded-3xl
      border
      border-white 
      py-2
      px-3 
    `}

    ${({ sideNavbar }) => (sideNavbar ? tw`w-full` : 'w-80')}
  }

  button {
    ${tw`
      ml-1
      absolute
      top-1/2 
      -translate-y-1/2  
      text-xl
    `}
  }

  input{
    ${tw`
      w-full
      bg-transparent 
      outline-none
      pl-9 
      font-primary
    `}
  }
`;
