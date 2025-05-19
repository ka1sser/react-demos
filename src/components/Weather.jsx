import React from 'react';

const Weather = ({temperature}) => {
    if(temperature < 15){
        return(
            <h3>It's cold outside!❄️</h3>
        );
    }
    else if(temperature < 25 && temperature > 15){
        return(
            <h3>It's nice outside 🌤️</h3>
        );
    }
    else{
        return(
            <h3>It's hot outside! ☀️</h3>
        )
    }
}

export default Weather;