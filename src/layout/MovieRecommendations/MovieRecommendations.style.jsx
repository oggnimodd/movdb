import tw, { styled } from 'twin.macro';

export const RecommendationWrapper = styled.div`
  ${tw`
    mt-10
    rounded-lg 
    mb-10
  `}
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background: rgba(21, 31, 48, 0.7);
  border: 1px solid rgba(21, 31, 48, 0.31);
`;

export const RecommendationTitle = styled.h2`
  ${tw`
    text-white
    text-2xl
  `}
`;
