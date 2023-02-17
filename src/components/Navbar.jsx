import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  return (
    <nav className="w-full h-28 bg-emerald-500 flex items-center">
      <div className="w-full flex items-center justify-between">
        <Link
          to={"/"}
          className="mx-5 font-mono text-3xl font-bold text-white cursor-pointer"
        >
          CONNECTO
        </Link>
        <div className="w-full px-5 flex items-center justify-end">
          {user ? (
            <>
              <p className="font-mono text-white font-semibold">
                {user.username}
              </p>
            </>
          ) : (
            <Link
              to="/auth"
              className="bg-emerald-400 px-5 py-2 rounded-full font-mono text-white font-semibold text-2xl hover:bg-emerald-600"
            >
              Enter
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
