import { useState } from "react";

const ToDoList = () => {

    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if (input.trim() === ""){
            return
        }
        setTodo([...todo, input])
        setInput("")
    }

    return (
        <div>
            <h1>To do:</h1>
            <div>
                {todo.map( chore => (
                    <li key={Math.random()}>{chore}</li>
                ))}
            </div>
            <input 
                type="text" 
                value={input}
                onChange={handleChange}
                className="bg-gray-400 border-2 border-black rounded-[5px] p-2"
                placeholder="Enter a task"
            />
            <button className="bg-amber-300 ml-2 p-1.5" onClick={handleClick}>+</button>
        </div>
    );
}

export default ToDoList;