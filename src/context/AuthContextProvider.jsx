import React, { createContext, useState } from 'react'

export const authContext = createContext(null)

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = () => setUser({id:1, username: wicho})

  const logout = () => setUser(null)

  const value = {user, login, logout}

  return (
   <authContext.Provider value={value}>{props.children}</authContext.Provider>
  )
}

export default AuthContextProvider