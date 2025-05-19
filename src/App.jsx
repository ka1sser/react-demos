import React from 'react'
import Person from './components/Person';
import Product from './components/Product';


const App = () => {

  return (
    <>
      <Person name="Kawanser" age={12} />
      <Product prod_name="Scizor EX Special Illustration Rare" prod_price={50}/>
    </>
  )
}

export default App;