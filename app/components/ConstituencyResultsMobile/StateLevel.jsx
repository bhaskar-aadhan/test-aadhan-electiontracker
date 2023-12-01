import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { getSateLevelStateData, getMagicFigureSateLevelData } from '~/services/ElectionServices';
import { Dropdown, PartyResults } from '.';

const StateLevel = () => {
    const [ webSocketData, select, setSelect, stateName, setStateName ] = useContext(ConstituencyContext);
    const stateLevelData = getSateLevelStateData(webSocketData, stateName)
    const magicFigure = getMagicFigureSateLevelData(webSocketData, stateName)
    console.log("state level sdata: ", stateLevelData, "mfd sld: ", magicFigure)
    return (
        <div className="entity-1-container w-[95%] my-3 mx-auto">
            <div className='dropdown-mobile-continer w-full'>
                <Dropdown />
            </div>
            <div className='results-mobile-container my-3'>
                <PartyResults stateLevelData = {stateLevelData} />
            </div>
            <p className='my-3 text-white font-medium'>Total Seats: {stateLevelData[0]['total_constituencies']}</p>
            <div className='flex justify-start items-center gap-2 my-2'>
                <p className='font-medium'>Magic figure: <span className='text-[#FFA500]'>{magicFigure}</span></p>
            </div>
        </div>
    )
}

export default StateLevel