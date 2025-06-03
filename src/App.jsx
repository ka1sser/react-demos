import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";

const App = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()

      if (data && data.length){
        setData(data)
      }
    }

    getData();
  },[]);

  return (
    <div>
      <ul>
        {data.map(todo => (
          <section>
            <li key={todo.id}>Title: {todo.title}</li>
            <li key={todo.id}>Body: {todo.body}</li>
            <br/>
          </section>
        ))}
      </ul>
    </div>
  )
}

export default App;