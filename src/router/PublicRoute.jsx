import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuthContext from '../context/useAuthContext';

const PublicRoute = (props) => {
  const { user } = useAuthContext();

  return !user ? props.children : <Navigate to="/" />;
}

export default PublicRoute