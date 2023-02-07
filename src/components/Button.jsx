import React from 'react'

const Button = ({text, ...rest}) => {
  return (
    <button {...rest} className="w-full h-14 text-center font-mono bg-emerald-500 text-white font-bold text-3xl rounded-md my-5">
   {text}
  </button>
  )
}

export default Button