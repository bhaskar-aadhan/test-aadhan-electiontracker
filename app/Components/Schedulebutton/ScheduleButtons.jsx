import React, { useEffect, useState } from 'react';
import { AddColors, handleClick } from '../Map/IndiaMap';
import {buttonStyles} from '../../phasesData'




const ScheduleButtons = ({type}) => {
	const [key,setKey]=useState('array')
	
	
    console.log(key)
	useEffect(()=>{
		if (type === 'assembly') {
			setKey('array2')
		}
		else {
			setKey('array')
		}
     buttonStyles.map((e)=>AddColors(e.borderColor,e[key],type))
	},[type])
	
	return (
		<div className="relative flex col-auto justify-center rounded-lg mt-2 border py-4 px-2">
			<div
				
				style={{
					fontSize: '.7rem',
					textAlign: 'center',
					border: 'solid 1px lightGray',
					backgroundColor: 'white',
					padding:"4px 10px 4px 10px",
					top:-11,
					position:"absolute",
					borderRadius: '5px',
					background: 'gray',
					cursor: 'pointer',
				}}
			>
				PHASE 1-7
			</div>
			<div >
            
			{buttonStyles.map(e => (
			
				<div
				onClick={()=>handleClick(e.borderColor,e[key],type)}
				key={e.id}
				className="flex text-center  "
				style={{
					fontSize: '.6rem',
					border: `2px solid ${e.borderColor}`,
					borderLeftWidth:e.phase==='Result' ?null: '10px',
					borderRadius: '5px',
					background:e.phase==='Result' ?"black" :'white',
					padding: '4px 10px 4px 10px',
					opacity:'0.7',
					alignItems:"center",
					color:e.phase==='Result' ? 'white':"",
					margin: '6px ',
					cursor: 'pointer',
				}}
				>
					<span className='sm:me-1' >{e.phase}</span>
					<span >{e.day}</span>
				</div>
			))}
			
					</div>
		</div>
	);
};
//assadasa
export default ScheduleButtons;
