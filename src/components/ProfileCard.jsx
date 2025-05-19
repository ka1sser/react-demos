import React from 'react';
import IconComponent from './IconComponent';

const ProfileCard = ({card, rarity, price}) => {
    return(
        <div className='bg-gray-300 p-[15px] rounded-[8px] text-black m-[10px]'>
            <div className='flex items-center space-x-2'>
                <IconComponent isPerson={false}/>
                <h1 className='text-2xl font-bold'>{card}</h1>
            </div>
            <p className='text-base'>{rarity}</p>
            <p className='text-sm'>${price}</p>
        </div>
    )
}

export default ProfileCard;