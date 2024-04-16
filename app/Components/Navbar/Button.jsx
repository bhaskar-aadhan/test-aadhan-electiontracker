import React from 'react'
import { Link } from '@remix-run/react';

const Button = ({ sx, buttonName, icon, iconSet, onClick, href }) => {
    return (
        <button type='button' onClick={onClick} className={`${sx} bg-[#EFEFEF] btn__shadow font-poppins text-black py-1 px-3 text-[10px] outline-none border-[1px] border-[#151515] rounded-md font-bold  hover:scale-95 transition ease-in-out duration-300 hover:border-indigo-300 flex justify-center items-center gap-2`}>
            <Link to={href}>
                <span>{buttonName}</span>
                <span className={`${iconSet ? "inline" : "hidden"}`}>{icon}</span>
            </Link>
        </button>
    )
}

export default Button;