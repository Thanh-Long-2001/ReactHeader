import { useEffect, useState } from "react";

export const useCount = (initial?: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial ?? 0);
  }, [initial]);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return { count, handleIncrease, handleDecrease };
};
