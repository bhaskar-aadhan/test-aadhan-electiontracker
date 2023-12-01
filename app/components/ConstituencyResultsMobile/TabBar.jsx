import React, { useContext } from 'react'
import { ConstituencyContext } from '../../services/context/ConstituencyService';

const TabBar = () => {
  const [ webSocketData, select, setSelect ] = useContext(ConstituencyContext)
  return (
    <div className='tabBar-container text-center rounded-md w-[95%] mx-auto bg-white text-[#0165FF] flex justify-center items-center'>
        <div onClick={()=>setSelect(true)} onKeyDown={()=>{}} className={`entity-1 w-full cursor-pointer rounded-s-md flex-1 py-1 ${select && 'text-white bg-[#0165FF]'}`}>State</div>
        <div onClick={()=>setSelect(false)} onKeyDown={()=>{}} className={`entity-2 rounded-e-sm w-full cursor-pointer flex-1 py-1 ${!select && 'text-white bg-[#0165FF]'}`}>Constituency</div>
    </div>
  )
}

export default TabBar