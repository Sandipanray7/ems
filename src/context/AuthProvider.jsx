import React, { createContext, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { useState } from 'react'

export const AuthContext= createContext()

const AuthProvider = ({children}) => {

  const[userData,setUserData]=useState(null)
  useEffect(()=>{
    const {employee,admin}=getLocalStorage()
    setUserData({employee,admin})
  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
