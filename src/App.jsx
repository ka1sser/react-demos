import React from 'react';
import { useState } from 'react';
import "./index.css";
import ExampleTwo from './components/ExampleTwo';
import ExampleOne from './components/ExampleOne';
import ExampleThree from './components/ExampleThree';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <ExampleOne />
      <ExampleTwo/>
      <ExampleThree />
    </>
  )
}

export default App;