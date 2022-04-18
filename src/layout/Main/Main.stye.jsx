import tw, { styled } from 'twin.macro';

export const MainWrapper = styled.div`
  ${tw`
    bg-primary 
    text-white
    w-full
    relative  
    flex 
    flex-col 
    flex-1
    overflow-auto 
  `} 

  flex-basis:0;
`;
