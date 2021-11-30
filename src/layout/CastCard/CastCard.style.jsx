import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div`
  ${tw`
    flex 
    items-center
    mb-5
  `}
`;

export const ImageWrapper = styled.div`
  ${tw`
    rounded-xl
    overflow-hidden
  `}

  height: ${({ height }) => height}px;
  width: ${({ height }) => height}px;
  min-height: ${({ height }) => height}px;
  min-width: ${({ height }) => height}px;

  a, span{
    ${tw`
      inline-block
      w-full 
      h-full
    `}
  }

  img{
    ${tw`
      w-full
      h-full
      object-cover 
      object-center
    `}
  }
`;

export const CardContent = styled.div`
  ${tw`
    px-5
    font-primary
  `}
`;

export const Name = styled.p`
  ${tw`
    text-xl
    font-bold
    mb-1
  `}
`;

export const Role = styled.p`
  ${tw`
    font-secondary 
    text-accent
    font-semibold
  `}
`;
