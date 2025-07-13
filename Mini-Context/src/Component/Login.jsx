import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [Username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const{setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({Username , password})
    }
  return (
    <div className='mt-10'>
        <input type="text" className='text-white bg-black rounded m-2 p-2' 
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
         placeholder='Username'/>
        <input type="password" className='text-white bg-black rounded m-2 p-2'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'/>
        <button className='bg-blue-600 text-white p-2 rounded-md' 
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login