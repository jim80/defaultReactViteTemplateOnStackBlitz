import { useState } from 'react';
const useCounter = (initialState = 0) => {
    const [count, setCount] = useState(initialState);
    const add = () => setCount(count + 1);
    const subtract = () => setCount(count - 1);
    return {count, add, subtract };
};
export default useCounter;