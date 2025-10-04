import React, { useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  // },)

  const [user,setUser]=useState(null)
  
  const handelLogin=(email,password)=>{
    if(email==="admin@gmail.com" && password==='1234'){
      setUser('admin')
      console.log(user)
    }else if(email==="user@gmail.com" && password==='1234'){
      setUser("employee")
      console.log(user)
    } 
    else{
      alert('login failed')
    }
  }

  return (
    <>
    {!user?<Login handelLogin={handelLogin}/>:''}
    {user=='admin'?<AdminDashboard/> :<EmployeeDashboard/>}
    </>
  )
}

export default App
