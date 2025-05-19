import React from 'react'
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import Greeting from './components/Greeting';

const App = () => {

  return (
    <>
      <Weather temperature={12}/>
      <Weather temperature={20}/>
      <Weather temperature={31}/>

      <UserStatus isAdmin={true} loggedIn={true}/>
      <UserStatus isAdmin={false} loggedIn={true}/>
      <UserStatus isAdmin={false} loggedIn={true}/>
      <UserStatus isAdmin={true} loggedIn={true}/>
      <UserStatus isAdmin={false} loggedIn={true}/>

      <Greeting timeOfDay={"morning"} />
      <Greeting timeOfDay={"afternoon"} />
    </>
  )
}

export default App;