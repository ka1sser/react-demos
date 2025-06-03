import React from 'react';
import {useState, useEffect} from 'react';

const CounterEffect = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        document.title = `${value}`
    }, [value]);

    return(
        <div>
            <h2>{value}</h2>
            <button onClick={()=> setValue(value + 1)}>+</button>
        </div>
    )
}

export default CounterEffect;