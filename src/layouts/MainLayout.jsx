import React from 'react'

const MainLayout = (props) => {
  return (
    <>
      <nav className="w-full h-28 bg-emerald-500 flex items-center justify-center"></nav>
    {
      props.children
    }
    <p>footer</p>
    </>
  )
}

export default MainLayout