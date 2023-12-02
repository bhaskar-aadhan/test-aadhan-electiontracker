import React, { useContext } from 'react'
import { ConstituencyContext } from '~/services/context/ConstituencyService';
import { TabBar, StateLevel, ConstituencyLevel, Share } from '.';
import { aadhanLogo } from '~/assets/images';

const Constituency = () => {
    const [webSocketData, select, setSelect] = useContext(ConstituencyContext);
    // const handleOnClick = async () => {
    //     if (navigator?.share) {
    //       try {
    //         await navigator.share({
    //           title: 'Election Results',
    //           text: 'Aadhan News App',
    //           url: 'https://adan.page.link/fC66EuG84gz654tj6',
    //         });
    //         onSuccess?.();
    //       } catch (err) {
    //         console.log("sahre error")
    //       }
    //     } else {
    //       console.log("non native share")
    //     }
    //   };

    const handleClick = () => {
        if (navigator?.share) {
            navigator.share({
                title: "Aadhan News App",
                url: "https://adan.page.link/fC66EuG84gz654tj6",
            }).then(()=>console.log("share response happened"))
            .catch((err)=>console.log("share error happened", err))   
        }else{
            console.log("native not happened")
        }
    }
    return (
        <div className='bg-[#050D3E] min-h-screen text-white pt-[1rem] overflow-y-hidden'>
            <div className="brand-mobile-logo pt-[1rem] pb-[2rem]">
                <img src={aadhanLogo} alt="aadhan app logo" className='block mx-auto w-[23%]' />
            </div>
            <TabBar />
            {select
                ?
                <StateLevel />
                :
                <ConstituencyLevel />
            }
            <div className='w-[95%] mx-auto mt-[2rem] flex justify-center items-center'>
                {/* <Share /> */}
                <button onClick={handleClick} className='text-white'>share</button>
            </div>
        </div>
    )
}

export default Constituency