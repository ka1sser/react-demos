import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";

const App = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      console.log("Called useEffect()")
      document.title = `Increment ${value}`
    }
  },[value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={()=> setValue(value+1)}>Click Me</button>
    </div>
  )
}

export default App;