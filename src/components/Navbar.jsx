import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <nav className="relative w-full h-28 bg-emerald-500 flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link
            to={"/"}
            className="mx-5 font-mono text-3xl font-bold text-white cursor-pointer"
          >
            CONNECTO
          </Link>
          <div className="w-full px-5 flex items-center justify-end">
            {user ? (
              <i
                onClick={toggleSidebar}
                className="ri-menu-line text-4xl text-white font-semibold cursor-pointer"
              ></i>
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
      <AnimatePresence>
        {openSidebar ? <Sidebar toggleSidebar={toggleSidebar} /> : ""}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
