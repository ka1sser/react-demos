import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";

const App = () => {

  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    console.log("Called useEffect()")
    document.title = `Increment ${value}`

  },[value, something]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value+1)}>Click Me</button>
      <button onClick={()=> setSomething(value+1)}>Increment by Something</button>
    </div>
  )
}

export default App;