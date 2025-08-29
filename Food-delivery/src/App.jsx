import React from 'react'
import './App.css'
import Header from './Components/Header';
import Body from './Components/Body';
import ResturantCard from './Components/ResturantCard';
import GetImageUrl from './Components/GetImageUrl';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <Outlet/>
      </div>
    </>
  )
}

export default App


