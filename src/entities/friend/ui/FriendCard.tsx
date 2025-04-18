import { useRandomFriend } from '../model/friendApi';

function FriendCard() {
  const randomFriend = useRandomFriend();
  if (!randomFriend) return <div>...</div>;

  return <div>{randomFriend.firstName}</div>;
}

export default FriendCard;
