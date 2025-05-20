import React from 'react';

const ComponentTwo = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick} className='bg-gray-400 w-8 h-auto px-2 py-1'>+</button>
        </div>
    )
}

export default ComponentTwo;