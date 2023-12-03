import React, { useContext } from 'react'
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { TabBar, StateLevel, ConstituencyLevel, Share } from '~/components/ConstituencyResultsMobile';

const ConstituencyResults = () => {
  const [webSocketData, select, setSelect] = useContext(ConstituencyContext);
  return (
    <div className='bg-[#050D3E] w-full min-h-screen flex items-center text-white  overflow-y-hidden'>
      <div className='w-full'>
        <TabBar />
        {select
          ?
          <StateLevel />
          :
          <ConstituencyLevel />
        }
        <div className='w-[95%] mx-auto mt-[2rem] flex justify-center items-center'>
          <Share text={"https://adan.page.link/rkVr2Vr5xZs1S2p39"} />
        </div>
      </div>
    </div>
  )
}

export default ConstituencyResults