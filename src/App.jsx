import React from 'react';
import "./index.css";

const Button = () => {

  const handleClick = () => console.log("THAT TICKLES!")

  return (
    <button 
      className='bg-linear-to-r from-green-200 to-amber-100 w-[100px] h-auto p-1 rounded-[10px]'
      onClick={handleClick}
    >  
      CLICK ME
    </button>
  )
}

const Copy = () =>{
  const copyHandler = () => {
    console.log("First, I will file a complaint."+
    "The processing will take 3 days. After that, if approved, I can move my report to our supervisor."+
    "It will take 2 more days, and if approve, you will be warned by them. So yeah, try to copy my content.")
  }

  return(
    <p onCopy={copyHandler}>TRY TO COPY THIS TEXT AND SEE WHAT I'LL DO TO YOU.</p>
  )
}

const Move = () => {

  function moveHandler(){
    alert("THE MOUSE TOUCHED ME!!!")
  }

  return(
    <p className='border-3 border-blue-400' onMouseMove={moveHandler}>
      TOUCH ME. I DARE YOU!
    </p>
  )
}

const App = () => {

  return (
    <div>
      <Button />
      <Copy />
      <Move/>
    </div>
  )
}

export default App;