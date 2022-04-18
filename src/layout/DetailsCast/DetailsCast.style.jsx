import tw, { styled } from 'twin.macro';

export const CastWrapper = styled.div`
  ${tw`
    mt-6 
    sm:px-[15px]
    select-none 
    w-full 
    flex  
    flex-col
    flex-1 
    overflow-x-hidden 
  `} 

  flex-basis: 0;
`;

export const CastWrapperHeader = styled.p`
  ${tw`
    text-accent 
    font-primary 
    mb-5 
    text-3xl 
    font-semibold
  `}
`;

export const CastWrapperFooter = styled.div`
  ${tw`  
    mt-4
    md:mt-6
    font-primary 
    font-bold  
  `}

  svg {
    ${tw`
      inline-block
      ml-2
      text-sm
    `}
  }
`;
