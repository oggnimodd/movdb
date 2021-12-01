import tw, { styled } from 'twin.macro';

export const HeaderWrapper = styled.div`
  ${tw`
    flex 
    justify-between 
    text-white 
    my-10 
    items-center
  `}
`;

export const PageName = styled.p`
  ${tw`
    uppercase 
    font-primary 
    text-2xl 
    font-bold
  `}
`;

export const PageCount = styled.div`
  ${tw`
    font-primary 
    text-xl
  `}
`;
