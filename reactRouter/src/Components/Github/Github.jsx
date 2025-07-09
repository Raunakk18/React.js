import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/raunakk18')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setdata(data)
      })
    }, [])
    
  return (
    <div className='bg-gray-600 text-white text-2xl m-4 p-3'>GitHub Followers:{data.followers} 
     <img src={data.avatar_url} alt="Git picture" width={200}  /> 
    </div>
  )
}

export default Github