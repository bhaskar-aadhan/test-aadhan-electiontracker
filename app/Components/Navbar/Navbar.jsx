import React, { useEffect, useState } from 'react';
import { NavLink } from '@remix-run/react';
// import platform from 'platform';
import  Button  from "./Button";
import  aadhanLogo  from './aadhan-logo.svg';


const Navbar = () => {
    const [applink, setApplink] = useState("app LINK")
    // useEffect(() => {
    //     if (platform.os.family === 'Android') {
    //         setApplink('https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=cricket')
    //     } else if (platform.os.family === "iOS") {
    //         setApplink('https://apps.apple.com/in/app/aadhan-breaking-short-news/id1415681829')
    //     } else {
    //         setApplink('https://play.google.com/store/apps/details?id=com.aadhan.hixic&referrer=utm_source=cricket')
    //     }
    // }, [])
    return (
        <div className='flex justify-between p-x mb-5' style={{width:"100%"}}>
            <div>
                <NavLink to='/'>
                    <img src={aadhanLogo} alt="aadhan logo"/>
                    
                </NavLink>
            </div>
            <div >
                <Button
                    href={applink}
                    sx={''}
                    buttonName={'DOWNLOAD APP'}
                    className='cursor-pointer'
                    iconSet={false}
                />
            </div>
        </div>
    )
}

export default Navbar