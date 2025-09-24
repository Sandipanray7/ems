import React from 'react'

const Header = () => {
  return (
    
      <div className='flex justify-between items-end p-4 bg-transparent'>
        <h1 className='text-2xl'>Hello,<br /><span className='text-3xl font-semibold'>Sandipan 🖐️</span></h1>
        <button className='bg-red-600 px-3 py-2 rounded-lg'>Log out</button>
      </div>
    
  )
}

export default Header
