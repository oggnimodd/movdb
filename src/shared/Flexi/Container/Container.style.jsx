import tw, { styled } from 'twin.macro';

export const ContainerStyle = styled.div`
  ${tw`
    mx-auto 
    relative
    xl:px-6
    md:px-4
    px-4 
  `}


  border: ${({ debug }) => debug && '1px solid green'};
`;
