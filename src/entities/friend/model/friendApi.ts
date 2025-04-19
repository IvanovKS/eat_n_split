import { useEffect, useState } from 'react';
import { Friend } from './types';
import getRandomNumber from '../lib/getRandomNumber';

export const useRandomFriend = () => {
  const [friend, setFriend] = useState<Friend | null>(null);
  const randomNumber = getRandomNumber(1, 30);
  const url = `https://dummyjson.com/users/${randomNumber}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setFriend(json);
      });
  }, []);

  return friend;
};
