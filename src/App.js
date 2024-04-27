import React, { useState } from 'react';
import { useDebounce, useThrottle } from './Debounce';
import './style.css';

export default function App() {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 500);
  const throttledValue = useThrottle(input, 500);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <p>{`Input Value :  ${input}`}</p>
      <p>{`Debounce Value :  ${debouncedValue}`}</p>
      <p>{`Throttle Value :  ${throttledValue}`}</p>
    </div>
  );
}
