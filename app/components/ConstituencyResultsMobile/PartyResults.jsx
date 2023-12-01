import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

const PartyResults = ({ stateLevelData }) => {
    return (
        <Table className="state-level-table">
            <TableHeader>
                <TableRow className="text-center bg-[#34509d] border-0 border-transparent">
                    <TableHead className="text-white ps-3">Party</TableHead>
                    <TableHead className="text-center text-white">Leading</TableHead>
                    <TableHead className="text-center text-white">Won</TableHead>
                    <TableHead className="text-center text-white">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {stateLevelData?.[0]?.['parties']?.map((party) =>
                    <TableRow key={party['name']} className='bg-[#2A3654]'>
                        <TableCell className="font-medium text-white ps-3">
                            <div className='flex justify-start items-center gap-2'>
                                <img className='w-5 h-5 rounded-full' src={party['logo']} alt="party logo" />
                                <p>{party['name']}</p>
                            </div>
                        </TableCell>
                        <TableCell className="text-center text-white">{party['leading']}</TableCell>
                        <TableCell className="text-center text-white">{party['won']}</TableCell>
                        <TableCell className="text-center font-semibold text-white">{party['leading'] + party['won']}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default PartyResults