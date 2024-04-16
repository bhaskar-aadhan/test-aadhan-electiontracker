import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { json, useLoaderData } from '@remix-run/react';
import { getFileContentWithCache } from '~/services/github.server';
import { parse } from '~/services/markdoc.server';
import DropDown from '~/Components/DropDown';
import ScheduleButtons from '~/Components/Schedulebutton/ScheduleButtons';
import IndiaMap from '~/Components/Map/IndiaMap';
import Navbar from '~/Components/Navbar/Navbar';
import Tab from '~/Components/Tab/Tab';
import Zoom from '../Components/Zoom';
import * as topojson from 'topojson-client';
import SwitchTab from '../Components/SwitchTab.jsx/SwitchTab'
import indiaJson from '~/MapData/india.json'
import General from '~/Components/GeneralElections/General'
import Assembly from '~/Components/Assembly Elections/Assembly'


export async function loader({ context }: LoaderFunctionArgs) {
	const content = await getFileContentWithCache(context, 'README.md');

	return json(
		{
			content: parse(content),
		},
		{
			headers: {
				'Cache-Control': 'public, max-age=3600',
			},
		},
	);
}


export default function Index() {
	const { content } = useLoaderData<typeof loader>();

	return (
		<div style={{  maxWidth: '700px',
		margin: '0 auto',
		padding: '20px',}}  className="flex flex-col px-5 py-5 ">
			<div >
				<Navbar />
				<Tab />
			</div>
            
			<div className='mt-8 border p-2 bg-white' >
			
                <SwitchTab tab1={< General/>} tab2={<Assembly/>}/>
				
			</div>
		</div>
	);
}
