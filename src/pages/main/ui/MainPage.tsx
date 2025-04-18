import { FriendCard } from '../../../entities/friend';
import { useMainPage } from '../model/useMainPage';

function MainPage() {
  const { number, handleClick } = useMainPage();
  return (
    <div>
      <FriendCard />
      <button onClick={handleClick}>{number}</button>
    </div>
  );
}

export default MainPage;
