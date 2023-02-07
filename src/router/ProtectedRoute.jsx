import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthContext from '../context/useAuthContext'

const ProtectedRoute = (props) => {
  const {user} = useAuthContext()
  if(!user) {
    return <Navigate to='/auth' replace/>
   }
  return (
   <>

   {
    props.children
   }
   </>
  )
}

export default ProtectedRoute