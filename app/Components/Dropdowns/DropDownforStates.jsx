
import { handleClick} from '../Map/IndiaMap'

const DropDownforStates = ({onChange,mapData,type}) => {
	let key;
	if(type==='assembly'){
        key="ST_NAME"
	}
	else{
		key="state"
	}
   console.log(mapData)
//   const  mapData = indiaJSON['features']
    //  console.log(mapData)
	    return (
		<div>
			<select onChange={(e)=>onChange(e.target.value)} class="appearance-none rounded border text-sm border-gray-400 bg-white px-4  py-2 leading-tight shadow hover:border-gray-500 focus:border-blue-500 focus:outline-none">
				<option disabled selected value="">
					Select State
				</option>
				{mapData
				.filter((value, index, self) => self.findIndex(e => e.properties[key] === value.properties[key]) === index)
				.map((e)=>{
                    return <option value={e.properties[key]}>
                        {e.properties[key]}
                    </option>
                })}
			</select>
		</div>
	);
};

export default DropDownforStates;

