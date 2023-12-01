import React from 'react';
import { ConstituencyResults } from '.';
import { Dropdown, Dropdown2 } from './CandidateWiseResults';

const ConstituencyLevel = () => {
    return (
        <div className="entity-1-container w-[95%] my-3 mx-auto">
            <div className='dropdown-mobile-continer w-full flex justify-start items-center gap-3'>
                <Dropdown />
                <Dropdown2 />
            </div>
            <p className='my-3'>Round No: 5</p>
            <div className='results-mobile-container my-3'>
                <ConstituencyResults />
            </div>
        </div>
    )
}

export default ConstituencyLevel