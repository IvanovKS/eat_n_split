import { Box as MuiBox } from '@mui/material';
import styled from 'styled-components';
import { PropsPanel } from '../model/types';

const StyledBox = styled(MuiBox)<{ variant: 'left' | 'right' }>`
  width: 45%;
  height: 85%;
  background-color: ${({ variant }) =>
    variant === 'left' ? '#ffbf64' : '#666666'};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

function StyledPanel({ children, variant }: PropsPanel) {
  return <StyledBox variant={variant}>{children}</StyledBox>;
}

export default StyledPanel;
