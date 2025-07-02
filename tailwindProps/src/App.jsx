import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    Name :" Raunak",
    age: 20,
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-red-300 text-white flex justify-center hover:bg-yellow-300 p-4 m-4 rounded'>Tailwind</h1>
      <Card userName="Raunak Code" btnText = "Click me" />
      <Card userName= "Golu jha"/>
      
    </>
  )
}

export default App
