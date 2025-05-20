import React from 'react';
import { useState } from 'react';
import "./index.css";

const App = () => {

  const [count, setCount] = useState(0)

  const [chars, setChars] = useState(["Itadori", "Edward", "Yukihira"]);

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)

  const addChar = () => {
    setChars([...chars, "Ueki"])
  };
  const removeChar = () => {
    setChars(chars.filter(f => f !== 'Yukihira'))
  };
  const updateChar = () => {
    setChars(chars.map(f => f === 'Edward' ? 'Edward Elric' : f))
  };

  const [movie, setMovie] = useState({
    title: "Asteroid City",
    ratings: 7.5
  });

  const handleClick = () => {
    // long method:
    // const copyMovie = {
    //   ...movie,
    //   ratings: 8.5
    // }

    setMovie({...movie, ratings:8.3})
  };

  const [collection, setCollection] = useState(
    [
      {id:1, card: "Walking Wake EX", rarity: "Ultra Rare"},
      {id:2, card: "Torterra EX", rarity: "Ultra Rare"},
      {id:3, card: "Shiftry Full Art", rarity: "Illustration Rare"},
      {id:4, card: "Shaymin", rarity: "Uncommon"},
    ]
  );

  const handleChangeCard = () => {
    setCollection(collection.map(c => (c.id === 1 ? {...collection, card: "Iron Leaves EX", rarity: "Double Rare"} : c)))
  }

  return (
    <>
      <div>
        <p>COUNT: {count}</p>
        <button className='bg-gray-400 w-7 p-0.5 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={increment}>+</button>
        <button className='bg-gray-400 w-7 p-0.5 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={decrement}>-</button>
      </div>

      <div>
        <div>
          {chars.map(f => (
            <li key={Math.random()}>{f}</li>
          ))}
        </div>

        <button className='bg-gray-400 w-auto p-2 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={addChar}>Add Char</button>
        <button className='bg-gray-400 w-auto p-2 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={removeChar}>Remove Char</button>
        <button className='bg-gray-400 w-auto p-2 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={updateChar}>Update Char</button>
      </div>

      <div className='mt-5'>
        <h1 className='text-2xl font-bold'>{movie.title}</h1>
        <p>Rating: {movie.ratings}/10</p>

        <button className='bg-gray-400 w-auto p-2 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={handleClick}>Update Ratings</button>
      </div>

      <div className='mt-5'>
        <h1 className='text-2xl font-bold'>Pokemon Cards</h1>
        {collection.map(card => (
          <li key={Math.random()}>{card.card} ({card.rarity})</li>
        ))}

        <button className='bg-gray-400 w-auto p-2 mt-2 ml-2 rounded-[5px] hover:bg-gray-600 hover:text-white' onClick={handleChangeCard}>Change Card</button>
      </div>
    </>

  )
}

export default App;