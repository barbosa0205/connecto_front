import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, redirect } from 'react-router-dom'
import useAuthContext from '../../context/useAuthContext'
const AuthPage = () => {

  const {user} = useAuthContext()


  return (
    <main className="container w-full h-screen flex flex-col items-center">
      {/* Auth container  */}
      <section className="w-11/12 flex flex-col items-center justify-center mt-20">
            <Outlet/>
      </section>
      {/* suggestions */}
      <section className='w-11/12 h-24 bg-gray-800 opacity-90 rounded-3xl'></section>
      <Link to={'/'} className='mt-24 font-mono text-3xl text-emerald-500 font-semibold cursor-pointer'>CONNECTO</Link>
    </main>
  )
}

export default AuthPage