import React, { useContext } from 'react';
import { ConstituencyContext } from '~/services/context/ConstituencyService';
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

const Dropdown = ({ sx }) => {
    const [webSocketData,select,setSelect,stateNameMobile,setStateNameMobile,webSocket2Data,constituency,setConstituency] = useContext(ConstituencyContext)
    console.log("state name", stateNameMobile)
    return (
        <div className={`${sx}`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="min-w-[155px] justify-start" variant="outline">
                        <div className='w-full flex justify-between items-center'>
                            <p>{stateNameMobile}</p>
                            <img src={downArrowIcon} alt="down icon" />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[180px]">
                    <DropdownMenuLabel>Select a State</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={stateNameMobile} onValueChange={setStateNameMobile}>
                        {webSocket2Data?.map((state) => (
                            <DropdownMenuRadioItem key={state['state']} value={state['state']}>{state['state']}</DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Dropdown