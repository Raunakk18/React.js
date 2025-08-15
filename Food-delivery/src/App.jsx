import React from 'react'
import './App.css'

const Header = () =>{
  return(
    <div className='header flex justify-between border border-black px-2.5 py-1.5'>
      <div className='logo-container'>
        <img className='logo w-24' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="logo" />
      </div>
      <div className='nav-items px-10 '>
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

const ResturantCard = () => {
  return (
    <div className="resturant-card  w-60  p-1.5  border border-transparent hover:border-black cursor-pointer transition-transform duration-500 ease-in-out hover:scale-95" style={ {backgroundColor : '#f0f0f0'}} >
      <img className=' w-full h-40 object-cover'
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/30/4016da64-14c4-414e-a125-f0dd9f32b96d_4db8ba2c-d53d-4d5a-8e59-e0ec7d1766d7.jpg_compressed" alt="res-logo"  />
          <h3 className='text-lg font-bold'>Meghna food</h3>
          <h4 className='text-base font-semibold'>Hyderabadi briyani,India</h4>
          <h4 className='text-base font-semibold'>4🌟</h4>
          <h4 className='text-base font-semibold'>30-35</h4>
    </div>
  )
}

const Body = ()=> {
  return(
    <div className=' body'>
      <div className='search p-2.5 flex justify-center items-center'>Search</div>
      <div className="resturant-container flex flex-wrap">
        <ResturantCard/>
       
      </div>
    </div>
  )
} 

function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <Body/>
      </div>
    </>
  )
}

export default App
