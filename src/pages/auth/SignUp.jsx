import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useForm } from '../../hooks/useForm'
import { signupChangeErrors, signupSubmitErrors } from '../../utils/errors/signupErrors'

const SignUp = () => {
  
  const {formData, handleChange} = useForm({

  }, signupSubmitErrors, signupChangeErrors)
  
  return (
    <form onSubmit={e => e.preventDefault()} className="w-11/12 p-2 mt-10 flex flex-col items-center justify-center">
    <h2 className="my-3 font-mono text-4xl text-gray-700">SIGN UP</h2>
    <Input onChange={handleChange} name='username' placeholder="username" type="text" />
    <Input onChange={handleChange} name='password' placeholder="password" type="password" />
    <Input onChange={handleChange} name='re_password' placeholder="repeat password" type="password" />
   <Button text='REGISTER'/>
    <section>
      <p className="font-mono text-lg">
          have an account?{" "}
        <Link
          to="/auth/signin"
          className="text-emerald-500 underline underline-offset-2"
        >
          Sign In
        </Link>
      </p>
    </section>
  </form>
  )
}

export default SignUp