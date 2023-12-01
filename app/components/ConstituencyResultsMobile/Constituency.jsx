import React, { useContext } from 'react'
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { TabBar, StateLevel, ConstituencyLevel, Share } from '.';
import { aadhanLogo } from '~/assets/images';

const Constituency = () => {
    const [webSocketData, select, setSelect] = useContext(ConstituencyContext);

    return (
        <div className='bg-[#050D3E] min-h-screen text-white pt-[1rem] overflow-y-hidden'>
            <div className="brand-mobile-logo pt-[1rem] pb-[2rem]">
                <img src={aadhanLogo} alt="aadhan app logo" className='block mx-auto w-[23%]' />
            </div>
            <TabBar />
            {select
                ?
                <StateLevel />
                :
                <ConstituencyLevel />
            }
            <div className='w-[95%] mx-auto mt-[2rem]'>
                <Share />
            </div>
        </div>
    )
}

export default Constituency