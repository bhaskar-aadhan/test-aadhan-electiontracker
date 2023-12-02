import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { getRoundNo } from '~/services/ElectionServices';
import { ConstituencyResults } from '.';
import { Dropdown, Dropdown2 } from './CandidateWiseResults';

const ConstituencyLevel = () => {
    const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = useContext(ConstituencyContext)
    const lastkey = getRoundNo(webSocket2Data, stateNameMobile, constituency)
    console.log("last key", lastkey)
    return (
        <div className="entity-1-container w-[95%] my-3 mx-auto">
            <div className='dropdown-mobile-continer w-full flex justify-start items-center gap-3'>
                <Dropdown />
                <Dropdown2 />
            </div>
            {lastkey > 0 && <p className='my-3'>
                Round No: {lastkey}
            </p>}
            <div className='results-mobile-container my-3'>
                <ConstituencyResults />
            </div>
        </div>
    )
}

export default ConstituencyLevel