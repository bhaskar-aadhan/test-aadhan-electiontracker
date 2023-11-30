import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { Dropdown, PartyResults } from '.';

const StateLevel = () => {
    const [ webSocketData ] = useContext(ConstituencyContext);
    console.log("ws component data", webSocketData);
    return (
        <div className="entity-1-container w-[95%] my-3 mx-auto">
            <div className='dropdown-mobile-continer w-full'>
                <Dropdown />
            </div>
            <div className='results-mobile-container my-3'>
                <PartyResults />
            </div>
            <p className='my-3'>Total Seats: {''}</p>
            <div className='flex justify-start items-center gap-2 my-2'>
                <p>Magic figure:</p>
                <div className='w-fit px-4 bg-[#FFA500] text-black rounded-md font-medium'>{''}</div>
            </div>
        </div>
    )
}

export default StateLevel