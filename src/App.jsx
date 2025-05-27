import React from 'react';
import { useState } from 'react';
import "./index.css";
import CopyContent from './components/CopyContent';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <CopyContent/>
    </>
  )
}

export default App;