import { useState } from 'react';
import DropDownforConstituencies from '../Dropdowns/DropDownforConstituencies';
import ScheduleButtons from '../Schedulebutton/ScheduleButtons';
import IndiaMap, { AddColors } from '../Map/IndiaMap';
import DropDownforStates from '../Dropdowns/DropDownforStates';
import indiaJSON from '../../MapData/General.json';
import Zoom from '../Zoom';
import { buttonStyles } from '../../phasesData';

const General = () => {
	const [selectedState, setSelectedState] = useState([]);

	const mapData = indiaJSON['features'];
	const onChange = e => {
		
		if (e !== '' && e !== undefined) {
			const reqState = mapData.filter(st => st.properties.state === e);
			setSelectedState(reqState);
		}
       
		console.log(selectedState);
	};

	return (
		<div className="flex justify-around items-center">
			<div className="flex flex-col  items-center justify-center">
				{/* <DropDown /> */}
				<div className="flex flex-row mt-2">
					<div className="mr-5">
						<DropDownforStates
							mapData={mapData}
							onChange={onChange}
							type={'general'}
						/>
					</div>

					<div>
						<DropDownforConstituencies data={selectedState} />
					</div>
					<button
						onClick={() => {setSelectedState([]); buttonStyles.map((e)=>AddColors(e.borderColor,e['array'],'general'))}}
						className=" ml-5 h-9 rounded bg-gray-400 px-4 py-1 font-bold text-gray-800 hover:bg-gray-500"
					>
						Reset
					</button>
				</div>

				{selectedState.length !== 0 ? (
					<Zoom type={'general'} Data={selectedState} />
				) : (
					<Zoom type={'general'} Data={indiaJSON['features']} />
				)}
			</div>
			<div className="sm:mr-2">
				<ScheduleButtons type={'general'} />
			</div>
		</div>
	);
};

export default General;
