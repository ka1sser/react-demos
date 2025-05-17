import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div>
        <Greet/>
      </div>
      <div>
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    </>
  )
}

export default App;