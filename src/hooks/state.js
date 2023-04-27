import { useState } from "react";

const useHook = (initialState = null) => {
  const [value, setValue] = useState(initialState);
  const change = (e) => {
    setValue(e);
  };
  return [
    value,
    {
      change,
    },
  ];
};

export { useHook };
