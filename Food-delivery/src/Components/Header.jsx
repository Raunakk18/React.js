import React, { useState } from 'react'
import LOGO_URL from '../utils/constants'

function Header() {
    const [btnName , setBtnName] =useState("Login")
    return (
    <div className='header flex justify-between border border-black px-2.5 py-1.5'>
        <div className='logo-container'>
            <img className='logo w-24' 
            src= {LOGO_URL}
            alt="logo" />
        </div>
        <div className='nav-items px-10 cursor-pointer'>
            <ul className='flex  text-xl font-medium  '>
            <li className='p-2.5 m-2.5'>Home</li>
            <li className='p-2.5 m-2.5'>About-Us</li>
            <li className='p-2.5 m-2.5'>Menu</li>
            <li className='p-2.5 m-2.5'>Cart</li>
            <button className=' bg-indigo-600 hover:bg-indigo-700 rounded-lg px-2 h-8 mt-5'
            onClick={ () => {
                btnName === "Login" ?
                setBtnName("Logout") 
                : setBtnName("Login")
            }}
            >
                {btnName}
            </button>
            </ul>
        </div>
        </div>
    )
}

export default Header