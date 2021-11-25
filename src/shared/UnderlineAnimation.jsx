import tw, { styled } from 'twin.macro';
import { colors } from '../constants/colors';

export const UnderlineAnimation = styled.span`
  background-image: linear-gradient(${colors.accent}, ${colors.accent});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: ${(props) => `0% ${props.size ? props.size : 3}px`};
  transition: all 400ms;
  padding-bottom: 2px;
  
  &:hover {
    background-size: ${(props) => `100% ${props.size ? props.size : 3}px`};
  } 
`;
