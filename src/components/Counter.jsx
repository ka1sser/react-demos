import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    
    const decrement = () => {
        setCount(prevCount => prevCount- 1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment} className="bg-gray-400 px-1 mx-1">+</button>
            <button onClick={decrement} className="bg-gray-400 px-1 mx-1">-</button>
        </div>
    );
}

export default Counter;