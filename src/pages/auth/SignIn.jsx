import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input'

const SignIn = () => {
  return (
    <form onSubmit={e => e.preventDefault()} className="w-11/12 p-2 mt-10 flex flex-col items-center justify-center">
      <h2 className="my-3 font-mono text-4xl text-gray-700">SIGN IN</h2>
      <Input placeholder="username" type="text" />
      <Input placeholder="password" type="password" />
     <Button text='ENTER'/>
      <section>
        <p className="font-mono text-lg">
          don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-emerald-500 underline underline-offset-2"
          >
            Sign Up
          </Link>
        </p>
      </section>
    </form>
  );
}

export default SignIn