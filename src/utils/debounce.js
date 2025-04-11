import { useCallback, useRef } from 'react';

export const useDebounce = (func, delay) => {
  const timeoutRef = useRef();
  return useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        clearTimeout(timeoutRef.current);
        func(...args);
      }, delay);
    },
    [func, delay],
  );
};
