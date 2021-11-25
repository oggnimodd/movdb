import tw, { styled } from 'twin.macro';
import { ToastContainer } from 'react-toastify';
import { colors } from '../../constants/colors';

export const StyledToast = styled(ToastContainer)`
  ${tw`hidden sm:block`}
  
  .Toastify__toast{
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 
    ${tw`
      text-white
      font-primary
    `}
    z-index: 99999;
  }

  .Toastify__progress-bar {
    background: ${colors.primary};
  }

  .toast-message-type{
    ${tw`
      text-sm
    `}
  }

  .add{
    ${tw`bg-accent`}
  }

  .remove{
    background: #1d9e28;
  }
`;
