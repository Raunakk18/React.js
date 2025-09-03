import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header';
import Body from './Components/Body';
import {createBrowserRouter , RouterProvider}from 'react-router-dom'
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Error from './Components/Error.jsx';
import RestaurantsMenu from './Components/RestaurantsMenu.jsx';


const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    errorElement : <Error/>,
    children: [
      {
        path : "/",
        element: <Body/>
      },
      {
    path : "about",
    element : <About/>
  },
  {
    path : "contact",
    element: <Contact/>
  },
  {
    path : "/restaurants/:resId",
    element: <RestaurantsMenu/>
  }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
