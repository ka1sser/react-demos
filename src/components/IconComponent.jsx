import React from 'react';
import { MdCatchingPokemon } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";


const IconComponent = ({isPerson}) =>{
    if(isPerson){

        return <GoPersonFill />
    }
    else{

        return <MdCatchingPokemon />
    }
}

export default IconComponent;