import { useState } from 'react';
// заглушка (изменить)
export const useMainPage = () => {
  const [number, setStr] = useState<number>(0);
  const handleClick = () => {
    setStr(number + 1);
  };
  return {
    number,
    handleClick,
  };
};
