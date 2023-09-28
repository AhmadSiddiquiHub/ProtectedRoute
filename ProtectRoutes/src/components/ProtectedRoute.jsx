import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated, Component}) => {

  const navigate = useNavigate()

  useEffect(() => {

    if(!isAuthenticated){
      navigate('/')
     
    }
  }, [])


  return (
    <>
      <Component />
    </>
  )
}

export default ProtectedRoute