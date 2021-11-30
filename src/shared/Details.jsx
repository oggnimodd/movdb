import tw, { styled } from 'twin.macro';

export const ImageWrapper = styled.div`
${tw`
  lg:pl-5
  w-full
  relative
  mb-12
  lg:mb-0
`}

aspect-ratio: 500/750;

span {
  width: 100%;
}

img{
  ${tw`
    inline-block
    w-full
    object-center
    object-cover
    rounded-2xl
  `}

box-shadow: rgba(7, 7, 7, 0.322) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
`;

export const Title = styled.h2`
  ${tw`
    font-primary
    text-3xl
    md:text-4xl
    font-bold
    mb-2
  `}
`;

export const Description = styled.div`
  ${tw`
    font-secondary
    select-none
    mb-5
  `}

  line-height: 1.8;
  white-space: pre-line;

  p{
    word-break: break-all; 
  }
`;

export const SubSection = styled.div`
  ${tw`
    mb-5
  `}
`;

export const SubTitle = styled.h3`
  ${tw` 
    font-primary 
    text-white
    text-lg
    text-accent
    font-semibold
    mb-1
  `}
`;

export const SubInfo = styled.p`
  ${tw`
    text-white 
    font-secondary 
    text-base
  `}
`;

export const ListFlex = styled.div`
  ${tw`
    flex
    flex-wrap
    gap-y-2
    gap-x-16
  `}
`;

export const RenderItem = styled.span`
  ${tw`
    text-base
  `}

  a{
    ${tw`
      text-white
      flex
      items-center
      justify-center
    `}
  }
`;

export const GenreItem = styled(RenderItem)`
  svg{
    font-size: 22px;
    margin-right: 5px;
  }
`;

export const CountryItem = styled(RenderItem)`
 img{
   ${tw`
      inline-block
      mr-2
    `}
  }
`;
