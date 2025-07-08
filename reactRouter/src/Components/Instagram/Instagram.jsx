import React, { useEffect } from 'react'

function Instagram() {
    useEffect(() => {
      fetch('https://api.instagram.com/v1/users/self/?access_token=')
    }, [])
    
  return (
    <div className='bg-gray-600 text-white text-2xl m-4 p-3'>Instagram followers: </div>
  )
}

export default Instagram