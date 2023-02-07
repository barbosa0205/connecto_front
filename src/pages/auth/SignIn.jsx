import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button';
import Input from '../../components/Input'
import useAuthContext from '../../context/useAuthContext';
import { useForm } from '../../hooks/useForm';
import { signinChangeErrors, signinSubmitErrors } from '../../utils/errors/signinErrors';

const SignIn = () => {

  const navigate = useNavigate()

  const {authUser} = useAuthContext()

  const {formData, handleChange, handleSubmit, submited} = useForm({
    username: '',
    password: ''
  }, signinChangeErrors, signinSubmitErrors)


  useEffect(() => {
    if(submited) {
      authUser(formData.username, formData.password)
      navigate("/chats")
    }
  }, [submited])

  return (
    <form onSubmit={e => e.preventDefault()} className="w-11/12 p-2 mt-10 flex flex-col items-center justify-center">
      <h2 className="my-3 font-mono text-4xl text-gray-700">SIGN IN</h2>
      <Input placeholder="username" type="text" name="username" onChange={handleChange} value={formData.username}/>
      <Input placeholder="password" type="password" name="password" onChange={handleChange} value={formData.password}/>
     <Button text='ENTER' onClick={handleSubmit}/>
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