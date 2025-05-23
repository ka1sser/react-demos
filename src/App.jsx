import React from 'react';
import { useState } from 'react';
import "./index.css";
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import Profile from './components/Profile';

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <ToDoList />
      <Profile/>
    </>
  )
}

export default App;