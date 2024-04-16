
import { handleClick } from '../Map/IndiaMap';

const DropDownforConstituencies = ({data,type}) => {
	let key;
	if(type==='assembly'){
        key="AC_NAME"
	}
	else{
		key="displayName"
	}
    
  console.log(data)
	    return (
		<div>
			<select onChange={(e)=>handleClick('yellow',[e.target.value],type)} class="appearance-none rounded border text-sm border-gray-400 bg-white px-4  py-2 leading-tight shadow hover:border-gray-500 focus:border-blue-500 focus:outline-none width:300">
				<option disabled selected value="">
					Select Consistuency
				</option>
				{data.map((e)=>{
					if(e.properties[key]){

						return <option value={e.properties[key]}>
                        {e.properties[key]}
                    </option>
					}
                })}
				
			</select>
		</div>
	);
};

export default DropDownforConstituencies;