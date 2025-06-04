import {useState, useContext} from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {

    const {updateUser} = useContext(UserContext)
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.trim()){
            updateUser(input);
            setInput("")
        }
    }

    return(
        <div>
            <input 
                type='text' 
                value={input} 
                onChange={handleChange} 
                placeholder='Name'
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UpdateUser;