import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInApi } from "../../apis/auth.api";
import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import Input from "../../components/Input";
import useAuthContext from "../../context/useAuthContext";
import useSocketContext from "../../context/useSocketContext";
import { useForm } from "../../hooks/useForm";
import {
  signinChangeErrors,
  signinSubmitErrors,
} from "../../utils/errors/signinErrors";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authUser } = useAuthContext();
  const { connectToSocket } = useSocketContext();
  const { formData, handleChange, handleSubmit, submited, submitErrors } =
    useForm(
      {
        usernameOrEmail: "",
        password: "",
      },
      signinChangeErrors,
      signinSubmitErrors
    );

  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    (async () => {
      if (submited) {
        /* authUser(formData.username, formData.password) */
        const data = await signInApi({
          usernameOrEmail: formData.usernameOrEmail,
          password: formData.password,
        });

        if (!data.success) {
          /* lanzar error en el form */
          setSubmitError(data.message);
          return;
        }

        /*si todo sale bien, guardar token en localstorage y setear usuario */

        localStorage.setItem("connecto_user_token", data.token);

        authUser({ ...data.user, token: data.token });

        /* conectamos al socket */
        connectToSocket(data.user._id, data.token);
        navigate(location.state.from || "/");
      }
    })();
  }, [submited]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-11/12 max-w-2xl p-2 mt-10 flex flex-col items-center justify-center"
    >
      <h2 className="my-3 font-mono text-4xl text-white">SIGN IN</h2>
      <Input
        placeholder="username or email"
        type="text"
        name="usernameOrEmail"
        onChange={handleChange}
        value={formData.usernameOrEmail}
      />
      {submitErrors?.usernameOrEmail ? (
        <ErrorText text={submitErrors.usernameOrEmail} />
      ) : (
        ""
      )}
      <Input
        placeholder="password"
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      {submitErrors?.password ? <ErrorText text={submitErrors.password} /> : ""}
      <Button text="ENTER" onClick={handleSubmit} />
      {submitError ? <ErrorText text={submitError} /> : ""}
      <section className="mt-5">
        <p className="font-mono text-xl text-white">
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
};

export default SignIn;
