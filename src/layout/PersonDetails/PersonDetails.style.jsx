import tw, { styled } from 'twin.macro';

export const ReadMoreMask = styled.div`
  ${tw`
    absolute 
    bottom-0 
    right-0 
    sm:pr-10 
    w-full 
    text-right
  `}

  background: rgb(21,31,48);
  background: linear-gradient(298deg, #151f30ed 47%, rgba(21,31,48,0) 85%);
`;

export const ReadMoreButton = styled.button`
  ${tw`
    text-accent 
    font-bold 
    font-primary
  `}
`;
