import React, { createContext, useState } from 'react'


export const authContext = createContext(null)

const AuthContextProvider = (props) => {


  const [user, setUser] = useState(null)


const authUser = (username, password) => {
  setUser({id:1, username, password})
  
}
  
  const logout = () => setUser(null)

  const value = {user, authUser, logout}

  return (
   <authContext.Provider value={value}>{props.children}</authContext.Provider>
  )
}

export default AuthContextProvider