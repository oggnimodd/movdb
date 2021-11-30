import tw, { styled } from 'twin.macro';

export const CreditsColumn = styled.div`
  ${tw`
    w-full 
    lg:w-[45%]
  `}
`;

export const ColumnHeader = styled.div`
  ${tw`
    font-primary 
    flex 
    items-center 
    mb-6
  `}

  p:nth-of-type(1) {
    ${tw`
      text-3xl
      text-accent 
      font-bold 
    `}
  }

  p:nth-of-type(2) {
    ${tw`
      ml-3 
      font-semibold
    `}
  }
`;

export const Sub = styled.div`
  ${tw`
    mb-12
  `}
`;

export const SubHeader = styled.p`
  ${tw`
    font-primary
    font-bold 
    text-xl
    mb-4
    text-accent
  `}
`;
