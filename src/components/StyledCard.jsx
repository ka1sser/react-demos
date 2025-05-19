import React from 'react';
import IconComponent from './IconComponent';

const StyledCard = ({title,description,location}) => {
    return(
        <div className="bg-linear-to-r to-green-700 from-green-400 p-[20px] rounded-[10px] text-blue-950 m-[10px]">
            <div className='flex items-center space-x-2'>
                <IconComponent isPerson={true}/>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <p className="text-base">{description}</p>
            <p className="text-sm text-gray-600">{location}</p>
        </div>
    )
}

export default StyledCard;