import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className=' h-[50%] flex items-center flex-nowrap overflow-x-auto gap-3 w-full rounded-lg mt-10 px-3 py-5'>
        <div className='bg-yellow-400 h-full w-[300px] flex-shrink-0 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='bg-red-600 w-[50px] text-xs rounded px-2 py-1'>High</h3>
                <h3>23 Sep, 2025</h3>
            </div>
            <h2 className='text-xl font-semibold'>Create a admin panel</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit illo tempora recusandae atque. Sapiente!</p>
        </div>
        <div className='bg-red-500 h-full w-[300px] flex-shrink-0 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='bg-gray-500 w-[50px] text-xs rounded px-2 py-1'>Low</h3>
                <h3>23 Sep, 2025</h3>
            </div>
            <h2 className='text-xl font-semibold'>Create a admin panel</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit illo tempora recusandae atque. Sapiente!</p>
        </div>
        <div className='bg-green-500 h-full w-[300px] flex-shrink-0 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='bg-red-600 w-[50px] text-xs rounded px-2 py-1'>High</h3>
                <h3>23 Sep, 2025</h3>
            </div>
            <h2 className='text-xl font-semibold'>Create a admin panel</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit illo tempora recusandae atque. Sapiente!</p>
        </div>
        <div className='bg-blue-400 h-full w-[300px] flex-shrink-0 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='bg-gray-500 w-[50px] text-xs rounded px-2 py-1'>Low</h3>
                <h3>23 Sep, 2025</h3>
            </div>
            <h2 className='text-xl font-semibold'>Create a admin panel</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit illo tempora recusandae atque. Sapiente!</p>
        </div>
        <div className='bg-gray-400 h-full w-[300px] flex-shrink-0 p-4 rounded-lg'>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='bg-yellow-600 w-[60px] text-xs rounded px-2 py-1'>Medium</h3>
                <h3>23 Sep, 2025</h3>
            </div>
            <h2 className='text-xl font-semibold'>Create a admin panel</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit illo tempora recusandae atque. Sapiente!</p>
        </div>
      
      
    </div>
  )
}

export default TaskList
