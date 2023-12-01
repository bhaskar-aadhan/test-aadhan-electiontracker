import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { getSateLevelStateData, getConstituenciesData } from '~/services/ElectionServices';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const ConstituencyResults = ({ stateLevelData }) => {
    const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = useContext(ConstituencyContext)
    const constituenciesData = getConstituenciesData(webSocket2Data, stateNameMobile, constituency)
    console.log("can data", constituenciesData)
    return (
        <Table className="state-level-table">
            <TableHeader>
                <TableRow className="text-center bg-[#34509d] border-0 border-transparent">
                    <TableHead className="text-white ps-3">Candidate</TableHead>
                    <TableHead className="text-center text-white">Votes</TableHead>
                    <TableHead className="text-center text-white">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {constituenciesData?.[0]?.['candidates']?.map((candidate) => (
                    <TableRow key={candidate['id']} className='bg-[#2A3654]'>
                        <TableCell className="font-medium text-white ps-3">
                            <div className='flex justify-start items-center gap-2'>
                                <img className='w-5 h-5 rounded-full' src={candidate['party_logo']} alt="party logo" />
                                <p>{candidate['name']}</p>
                            </div>
                        </TableCell>
                        <TableCell className="text-center text-white">{candidate['total_votes']}</TableCell>
                        <TableCell className="text-center text-white"></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ConstituencyResults