import tw, { styled } from 'twin.macro';

export const CastWrapper = styled.div`
  ${tw`
    mt-6 
    sm:px-[15px]
    select-none
  `}
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

export const ScrollableWrapper = styled.div`
  width: 100%;
`;

export const StyledView = styled.div`
  ${tw`
    w-full
    overflow-x-scroll 
    overflow-y-hidden
    flex 
    pb-8 
    gap-6
  `}

  ::-webkit-scrollbar{
    display: none;
  }
`;

export const ViewMore = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center 
    h-full 
    font-primary 
    font-bold
  `}
  width: 180px;
`;

export const CastWrapperFooter = styled.p`
  ${tw`
    mt-4
    md:mt-6
    font-primary 
    font-bold 
  `}
`;
