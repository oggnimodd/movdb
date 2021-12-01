import tw, { styled } from 'twin.macro';

export const SelectStyle = styled.div`
  position: relative;
  z-index: 6000;

  .react-select-container{
    max-width: 300px;
  }

  .react-select__control{
    ${tw`
      bg-transparent 
      font-primary 
    `}
  }

  .react-select__indicator-separator{
    display: none;
  }

  .react-select__indicators{
    svg{
      fill: white;
    }
  }

  .react-select__input-container, 
  .react-select__placeholder,
  .react-select__single-value{
    ${tw`
      text-white
    `}
  }

  .react-select__input{
    ${tw`
      focus:border-2 
      focus:border-white
    `}
  }


  .react-select__menu{
    ${tw`
      text-black 
      font-primary 
      font-semibold 
      text-sm
    `}
  }

  .react-select__option:hover{
    background: #6babff;
  }

  .react-select__option--is-focused{
    background: #6babff;
  }


  .react-select__option--is-selected{
    color:black;
    font-weight: bold;
    padding-left: 30px;
  }
`;
