import React from 'react'

const Input = ({...rest}) => {
  return (
    <input {...rest} className='w-full outline-none border-b py-1 px-2 my-3 placeholder:font-mono'/>
  )
}

export default Input