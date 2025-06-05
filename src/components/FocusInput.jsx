import {useRef} from 'react';

const FocusInput = () => {
    const input = useRef(null)

    const handleClick = () => {
        input.current.focus();
        input.current.value = "FOCUSING"
    }

    return(
        <div>
            <input type='text' ref={input}/>
            <button onClick={handleClick}>FOCUS</button>
        </div>
    );
}

export default FocusInput;