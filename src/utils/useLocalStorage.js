import { useState } from "react";
const initialValue = "initialValue";
const useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = value => {
    setStoredData(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedData, setValue];
};
export default useLocalStorage;
