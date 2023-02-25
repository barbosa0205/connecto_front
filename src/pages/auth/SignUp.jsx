import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpApi } from "../../apis/auth.api";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import Input from "../../components/Input";
import useAuthContext from "../../context/useAuthContext";
import useSocketContext from "../../context/useSocketContext";
import { useForm } from "../../hooks/useForm";
import {
  signupChangeErrors,
  signupSubmitErrors,
} from "../../utils/errors/signupErrors";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authUser } = useAuthContext();
  const { connectToSocket } = useSocketContext();
  const { formData, handleChange, handleSubmit, submited, submitErrors } =
    useForm(
      {
        username: "",
        email: "",
        password: "",
        re_password: "",
      },
      signupChangeErrors,
      signupSubmitErrors
    );

  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (submited) {
        setLoading(true);
        const data = await signUpApi({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        if (!data.success) {
          setSubmitError(data.message);
          setLoading(false);
          restartSubmit();
          return;
        }

        /* si todo sale bien, guardar el token en localstorage y setear el usuario */

        localStorage.setItem("connecto_user_token", data.token);

        authUser({ ...data.user, token: data.token });

        /* conectamos al socket */
        connectToSocket(data.user._id, data.token);
        setLoading(false);
      }
    })();
  }, [submited]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-11/12 p-2 mt-10 flex flex-col items-center justify-center"
    >
      <h2 className="my-3 font-mono text-4xl text-gray-700">SIGN UP</h2>
      <Input
        onChange={handleChange}
        name="username"
        placeholder="username"
        type="text"
      />
      {submitErrors?.username ? (
        <p className="text-red-500 text-center">{submitErrors.username}</p>
      ) : (
        ""
      )}
      <Input
        onChange={handleChange}
        name="email"
        placeholder="email"
        type="text"
      />
      {submitErrors?.email ? <ErrorText text={submitErrors.email} /> : ""}
      <Input
        onChange={handleChange}
        name="password"
        placeholder="password"
        type="password"
      />
      {submitErrors?.password ? <ErrorText text={submitErrors.password} /> : ""}
      <Input
        onChange={handleChange}
        name="re_password"
        placeholder="repeat password"
        type="password"
      />
      {submitErrors?.re_password ? (
        <ErrorText text={submitErrors.re_password} />
      ) : (
        ""
      )}
      <div className="w-full flex items-center justify-center">
        <Button text="REGISTER" onClick={handleSubmit} />
        {loading ? (
          <i className="ri-restart-line text-3xl text-white font-bold animate-spin mx-3"></i>
        ) : (
          ""
        )}
      </div>
      {submitError ? <ErrorText text={submitError} /> : ""}
      <section className="mt-5">
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
  );
};

export default SignUp;
