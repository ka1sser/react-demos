import React from 'react'
import Card from './components/Card';


const App = () => {

  return (
    <>
      <Card>
        <h1>React Developer</h1>
        <h2>Proficient in React and React Native.</h2>
      </Card>
      <Card>
        <h1>Game Developer</h1>
        <h2>Proficient in Unity Game Engine and C# Scripting.</h2>
      </Card>
      <Card>
        <h1>Human</h1>
        <h2>Proficient in eating and sleeping.</h2>
      </Card>
    </>
  )
}

export default App;