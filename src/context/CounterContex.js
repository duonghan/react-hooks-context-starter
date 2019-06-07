import { useState } from 'react';
import createUseContext from 'constate';

// Create a custom hook
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return { count, increment, decrement };
}

// declare context state object to share the state with other components
export const useCounterContext = createUseContext(useCounter);
