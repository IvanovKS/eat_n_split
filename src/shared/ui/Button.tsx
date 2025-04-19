import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';
import { PropsButton } from '../model/types';

const StyledButton = styled(MuiButton)<{ type: 'add' | 'select' }>`
  background-color: ${({ type }) =>
    type === 'add' ? '#040403' : '#e12121'};
`;

function Button({ children, type }: PropsButton) {
  return <StyledButton variant="contained" type='add'>{children}</StyledButton>;
}

export default Button;
