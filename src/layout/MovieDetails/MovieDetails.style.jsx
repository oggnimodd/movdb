import tw, { styled } from 'twin.macro';
import { Container } from '../../shared/Flexi';
import { breakpoints }from '../../constants/breakpoints';

const placeholderImage = new URL('../../assets/placeholder.svg', import.meta.url).href;
export const NoImage = styled.div`
  ${tw`
    w-full
    h-full
    bg-no-repeat
    bg-center
  `}
  background-image: url(${placeholderImage});
  background-color: #DBDBDB;
`;
