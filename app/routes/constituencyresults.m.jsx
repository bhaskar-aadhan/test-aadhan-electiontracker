import React, { useContext } from 'react'
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { TabBar, StateLevel, ConstituencyLevel, Share } from '~/components/ConstituencyResultsMobile';

const ConstituencyResults = () => {
  const [webSocketData, select, setSelect] = useContext(ConstituencyContext);
  return (
    <div className='bg-[#050D3E] min-h-screen text-white pt-[9rem] overflow-y-hidden'>
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

export default ConstituencyResults