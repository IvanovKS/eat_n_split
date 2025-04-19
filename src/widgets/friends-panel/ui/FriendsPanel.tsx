import { FriendCard } from '../../../entities/friend';
import { StyledPanel } from '../../../shared';

function FriendsPanel() {
  return (
    <StyledPanel variant="left">
      <FriendCard />
      <FriendCard />
    </StyledPanel>
  );
}

export default FriendsPanel;
