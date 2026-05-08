import { useState, useEffect, useCallback } from "react";


export function useDebounce(val, delay = 500) {
  const [debouncedVal, setDebouncedVal] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedVal(val), delay);
    return () => clearTimeout(timer);
  }, [val, delay]);
  return debouncedVal;
}


export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    setStoredValue(value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key]);

  return [storedValue, setValue];
}
