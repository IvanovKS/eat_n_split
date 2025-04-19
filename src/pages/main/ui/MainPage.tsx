import { Box as MuiBox } from '@mui/material';
import styled from 'styled-components';
import FriendsPanel from '../../../widgets/friends-panel';
import { FriendCard } from '../../../entities/friend';
import { useMainPage } from '../model/useMainPage';

const StyledBox = styled(MuiBox)`
  background-color: #ffda8f26;
  border-radius: 20px;
  border: 5px solid #0000ff;
  width: 85%;
  height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function MainPage() {
  const { number, handleClick } = useMainPage();
  return (
    <StyledBox>
      {/* <FriendCard /> */}
      {/* <button onClick={handleClick}>{number}</button> */}
      <FriendsPanel />
      <FriendsPanel />
    </StyledBox>
  );
}

export default MainPage;
