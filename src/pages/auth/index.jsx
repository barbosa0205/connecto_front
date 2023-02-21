import React, { useEffect } from "react";
import { Link, NavLink, Outlet, redirect } from "react-router-dom";
import useAuthContext from "../../context/useAuthContext";
const AuthPage = () => {
  const { user } = useAuthContext();

  return (
    <main className="h-screen ss:pt-20">
      {/* Auth container  */}
      <section className="w-full h-full ss:h-fit ss:max-w-4xl bg-gray-800 flex flex-col items-center justify-center p-20 mx-auto">
        <Outlet />
        {/* suggestions */}
        {/* <section className="w-11/12 max-w-xl my-5 h-24 bg-gray-800 opacity-90 rounded-2xl"></section> */}
        <Link
          to={"/"}
          className="mt-24 font-mono text-3xl ss:text-5xl text-white font-semibold cursor-pointer"
        >
          CONNECTO
        </Link>
      </section>
    </main>
  );
};

export default AuthPage;
