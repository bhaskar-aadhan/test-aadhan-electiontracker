import React, { useContext } from 'react';
import { ElectionContext } from '~/services/context/ElectionService';
import { getSateData } from '~/services/ElectionServices';
import { InfoBar, Card, Download } from '.';

const Election = () => {
  const [webSocketData, stateName] = useContext(ElectionContext);
  const stateData = getSateData(webSocketData[0]['states'], stateName)
  console.log("sateData", stateData)
  return (
    <div className='w-full min-h-screen font__nunitosans flex flex-col items-center bg-[#050D3E]' style={{ background: '#B15EFF' }}>
      {/* background: `linear-gradient( -80deg , #d7e9ff, #7db3ff, #d7e9ff)*/}
      <div className="info-bar-container w-full flex items-center  bg-[#003D75] px-2 md:px-6" style={{ alignSelf: 'flex-start' }}>
        <InfoBar />
        <Download />
      </div>
      <div className="w-full result-cards-container my-5 md:my-0 flex flex-1 justify-center md:content-center gap-y-5 md:gap-x-8 md:gap-y-11 flex-wrap overflow-y-auto">
        {stateData[0]['media_sources'].map((media) => (
          <Card key={media['name']} sx={`w-[90%] mx-auto md:w-[30%]`} media={media['name']} parties={media['party_wise_data']} />
        ))}
      </div>
    </div>
  )
}

export default Election