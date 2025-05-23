import React from 'react';
import { useState } from 'react';

const ExampleOne = () => {

    const [count, setCount] = useState(() => {
            const initialCount = 10;
            return initialCount;
        });

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment} className='bg-gray-400 p-2'>Increment</button>
        </div>
    )
};

export default ExampleOne;