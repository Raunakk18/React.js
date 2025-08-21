import React from 'react'

function Header() {
    return (
    <div className='header flex justify-between border border-black px-2.5 py-1.5'>
        <div className='logo-container'>
            <img className='logo w-24' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo" />
        </div>
        <div className='nav-items px-10 cursor-pointer'>
            <ul className='flex  text-xl font-medium  '>
            <li className='p-2.5 m-2.5'>Home</li>
            <li className='p-2.5 m-2.5'>About-Us</li>
            <li className='p-2.5 m-2.5'>Menu</li>
            <li className='p-2.5 m-2.5'>Cart</li>
            </ul>
        </div>
        </div>
    )
}

export default Header