import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthContext from '../context/useAuthContext'

const ProtectedRoute = (props) => {
  const {user} = useAuthContext()
  
  return user ? props.children : <Navigate to='/auth'/>
}

export default ProtectedRoute