import { useState } from 'react';
import DropDownforConstituencies from '../Dropdowns/DropDownforConstituencies';
import ScheduleButtons from '../Schedulebutton/ScheduleButtons';
import IndiaMap, { AddColors } from '../Map/IndiaMap';
import DropDownforStates from '../Dropdowns/DropDownforStates'
import AssemblyJSON from '../../MapData/Assembly.json'
import Zoom from '../Zoom';
import { buttonStyles } from '../../phasesData';

const Assembly = () => {
    const [selectedState, setSelectedState] = useState([])
    
    
    let mapData = AssemblyJSON['features'];
    const requiredState = ['ANDHRA PRADESH','SIKKIM','ORISSA','ARUNACHAL PRADESH']
    mapData = mapData.filter((e)=>requiredState.includes(e.properties.ST_NAME))

    const onChange = (e) => {
        console.log(e, 'something')
        if (e !== '' && e !== undefined) {
            const reqState = mapData.filter((st) => st.properties.ST_NAME === e)
            setSelectedState(reqState)
            console.log(reqState)

        }
        
    }

    return (
        <div className="flex justify-around items-center">
					
					<div className="flex flex-col  items-center justify-center">
                    <div className='flex flex-row mt-2' >
                    <div className='mr-5'>
                        <DropDownforStates mapData={mapData} type={'assembly'} onChange={onChange} />
                    </div>

                    <div>

                        <DropDownforConstituencies data={selectedState}  type={'assembly'}/>

                    </div>
                    <button onClick={()=>{
                    setSelectedState([]);
                    buttonStyles.map((e)=>AddColors(e.borderColor,e['array2'],'assembly'))
                    }
                    } className=' ml-5 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-1 px-4 rounded h-9'>Reset</button>

                </div>
                {selectedState.length !== 0 ? <Zoom type={'assembly'} Data={selectedState}  /> : <Zoom Data={ AssemblyJSON['features']}  type={'assembly'}/>} 
						
					</div>
					<div className="sm:mr-2">
						<ScheduleButtons type={'assembly'} />
					</div>
				</div>
    )
}

export default Assembly
