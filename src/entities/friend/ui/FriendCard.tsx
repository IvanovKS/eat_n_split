import { useRandomFriend } from '../model/friendApi';
import Progress from '../../../shared/ui/Progress';

function FriendCard() {
  const randomFriend = useRandomFriend();
  if (!randomFriend) return <Progress />;

  return (
    <div>
      <img src={randomFriend.image} alt="avatar" />
      <h2>{randomFriend.firstName}</h2>
    </div>
  );
}

export default FriendCard;
