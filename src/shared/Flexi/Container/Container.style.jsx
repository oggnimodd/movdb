import tw, { styled } from 'twin.macro';

export const ContainerStyle = styled.div`
  ${tw`
    mx-auto 
    relative
    px-[15px]
    w-full
  `}
  
  border: ${({ debug }) => debug && '1px solid green'};
`;
