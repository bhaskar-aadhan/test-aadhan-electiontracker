import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { getSateLevelStateData } from '~/services/ElectionServices';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";
import { Button } from '~/components/ui/button';
import { downArrowIcon } from '~/assets/images';

const Dropdown2 = ({ sx }) => {
    const [webSocketData, select, setSelect, stateNameMobile, setStateNameMobile, webSocket2Data, constituency, setConstituency] = useContext(ConstituencyContext)
    const stateData = getSateLevelStateData(webSocket2Data, stateNameMobile)
    console.log("state data dd2", stateData)
    return (
        <div className={`${sx}`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="min-w-[155px] justify-start" variant="outline">
                        <div className='w-full flex justify-between items-center'>
                            <p>{constituency}</p>
                            <img src={downArrowIcon} alt="down icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[180px]">
                    <DropdownMenuLabel>Select a constituencies</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={constituency} onValueChange={setConstituency}>
                        {stateData?.[0]?.['constituencies']?.map((constituencie) => (
                            <DropdownMenuRadioItem key={constituencie['name']} value={constituencie['name']}>{constituencie['name']}</DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Dropdown2