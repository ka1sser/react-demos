import React from 'react';
import "./index.css";
import { FaShoppingCart } from "react-icons/fa";
import StyledCard from './components/StyledCard';
import ProfileCard from './components/ProfileCard';

const App = () => {

  return (
    <div>
      <StyledCard 
       title={"Front End Developer"}
       description={"Capable of designing a website from UI/UX to its overall look and structure."}
       location={"New Zealand"}
      />
      <StyledCard 
       title="Game Developer"
       description="Candidate will become responsible in game design and programming the game using the Unity game engine."
       location="Netherlands"
      />

      <ProfileCard
        card={"Torterra EX"}
        rarity={"Full Art EX"}
        price={5.55}
      />
      <ProfileCard
        card={"Walking Wake EX"}
        rarity={"Full Art EX"}
        price={10}
      />

    </div>
  )
}

export default App;