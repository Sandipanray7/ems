import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-4'>
        <form>
            <h3 className='text-semibold mt-2'>Task Title</h3>
            <input type="text" placeholder='Enter a title' className="border-none outline-none bg-neutral-600 w-full px-3 py-2 mt-2 rounded-lg " />
            <h3 className='text-semibold mt-2'>Description</h3>
            <textarea className="border-none outline-none bg-neutral-600 w-full px-3 py-2 mt-2 rounded-lg" id="" placeholder='Enter description' rows='6'></textarea>
            <h3 className='text-semibold mt-2'>Date</h3>
            <input type="date" className="text-gray-300 border-none outline-none bg-neutral-600 w-full px-3 py-2 mt-2 rounded-lg" />
            <h3 className='text-semibold mt-2'>Assign to</h3>
            <input type="text" pattern="[0-9A-Fa-f]+" className="border-none outline-none bg-neutral-600 w-full px-3 py-2 mt-2 rounded-lg" id="" placeholder='Enter employee id'  />
            <h3 className='text-semibold mt-2'>Category</h3>
            <input type="text" placeholder='eg. design, dev, etc' className="border-none outline-none bg-neutral-600 w-full px-3 py-2 mt-2 rounded-lg " />
            <button className='bg-purple-600 mt-2 px-4 py-2 w-[15%] block mx-auto rounded-lg text-white'>Create Task</button>
        </form>
      </div>
  )
}

export default CreateTask
