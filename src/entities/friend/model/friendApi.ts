import { useEffect, useState } from 'react';
import { Friend } from './types';

export const useRandomFriend = () => {
  const [friend, setFriend] = useState<Friend | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users/2')
      .then((res) => res.json())
      .then((json) => {
        console.log(json), setFriend(json);
      });
  }, []);

  return friend;
};
