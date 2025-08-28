import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header';
import Body from './Components/Body';
import ResturantCard from './Components/ResturantCard';
import GetImageUrl from './Components/GetImageUrl';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
