import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    flex
    flex-col
    rounded-lg 
    overflow-hidden
    border
    border-accent
  `}
  width: 180px;
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1.37;
  overflow: hidden;

  img{
    ${tw`
      object-cover 
      object-center
    `}
  }
`;

export const CardContent = styled.div`
  ${tw`
    p-3 
    bg-primary
  `}
`;

export const Text = styled.p`
  ${tw`
    text-accent 
    font-primary
  `}

  &:nth-of-type(1){
    ${tw`
      text-white
      text-base
      font-semibold
      mb-1
    `}
  }
`;
