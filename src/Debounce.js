import { useEffect, useRef, useState } from 'react';

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    let intervalId = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(intervalId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useThrottle = (value, interval = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
};
