import { useEffect, useState } from "react";

export const useSendInput = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (!input) return;
    const timer = setTimeout(() => {
      console.log("Input value:", input);
    }, 500);

    return () => clearTimeout(timer);
  });

  return {
    input,
    setInput,
  };
};
