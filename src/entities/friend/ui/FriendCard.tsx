import { useRandomFriend } from '../model/friendApi';

function FriendCard() {
  const randomFriend = useRandomFriend();
  if (!randomFriend) return <div>...</div>;

  return (
    <div>
      <h2>{randomFriend.firstName}</h2>
      <img src={randomFriend.image} alt="avatar" />
    </div>
  );
}

export default FriendCard;
