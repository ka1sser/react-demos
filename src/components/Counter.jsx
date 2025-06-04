import {useReducer, useState} from 'react';
import reducer from './counterReducer';

const initialState = {count:0};

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        dispatch({type:"custom", payload: Number(input)})
        setInput("")
    }

    return(
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type:"increment"})}>+</button>
            <button onClick={() => dispatch({type:"decrement"})}>-</button>
            <button onClick={() => dispatch({type:"addTen"})}>+10</button>
            <button onClick={() => dispatch({type:"minusTen"})}>-10</button>
            <button onClick={() => dispatch({type:"reset"})}>RESET</button>
            <br/>
            <p>Enter a number:</p>
            <input type='number' value={input} onChange={handleChange}/>
            <button onClick={handleClick}>GO</button>
        </div>
    )
}

export default Counter;