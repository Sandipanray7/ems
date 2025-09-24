import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'

const AdminDashboard = () => {
  return (
    <div id="adminDashboard" className='px-4 bg-[#1C1C1C] h-auto w-auto'>
      <Header/>
      <CreateTask/>
    </div>
  )
}

export default AdminDashboard
