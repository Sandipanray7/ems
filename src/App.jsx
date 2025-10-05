import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import {AuthContext} from './context/AuthProvider'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  // },)

  const [user,setUser]=useState(null)
  
  const authData= useContext(AuthContext)
  
  const handelLogin=(email,password)=>{
    if(email==="admin@gmail.com" && password==='1234'){
      setUser('admin')
     
    }else if(authData && authData.employee.some(emp=>emp.email===email && emp.password===password)){
      setUser("employee")
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
