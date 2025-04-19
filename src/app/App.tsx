import { Container as MuiContainer } from '@mui/material';
import styled from 'styled-components';
import MainPage from '../pages/main/ui/MainPage';

const StyledContainer = styled(MuiContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledContainer maxWidth="xl">
      <MainPage />
    </StyledContainer>
  );
}

export default App;
