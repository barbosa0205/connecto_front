import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const AuthPage = () => {
  return (
    <main className="container w-full h-screen flex flex-col items-center">
      {/* Auth container  */}
      <section className="w-11/12 flex flex-col items-center justify-center mt-20">
            <Outlet/>
      </section>
      {/* suggestions */}
      <section className='w-11/12 h-24 bg-gray-800 opacity-90 rounded-3xl'></section>
    </main>
  )
}

export default AuthPage