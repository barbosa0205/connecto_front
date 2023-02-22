import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import { FloatMenu } from "./FloatMenu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <nav className="relative w-full min-h-[5rem] ss:min-h-[10rem] flex flex-col justify-center">
        <div className="w-full flex items-center justify-between">
          <Link
            to={"/"}
            className="mx-5 font-mono text-3xl ss:text-4xl font-bold text-white cursor-pointer"
          >
            CONNECTO
          </Link>
          <div className="w-full px-5 flex items-center justify-end">
            {user ? (
              <>
                <div className="flex items-center justify-center px-2">
                  {/* search */}
                  <i className="ri-search-2-line text-3xl px-3 ss:px-5 ss:py-2 mx-1 py-1 rounded-full bg-emerald-500 text-white cursor-pointer"></i>

                  {/* add contact */}
                  <i
                    onClick={() => navigate("/add_contact")}
                    className="ri-user-add-fill text-3xl mx-1 px-3 ss:px-5 ss:py-2 py-1 rounded-full bg-emerald-500 text-white cursor-pointer"
                  ></i>
                </div>

                {/* menú */}
                <i
                  onClick={toggleSidebar}
                  className="ri-menu-line text-4xl text-white font-semibold cursor-pointer ss:hidden"
                ></i>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-gray-800 px-10 py-3 rounded-xl font-mono text-white font-semibold text-2xl hover:bg-gray-900"
              >
                Enter
              </Link>
            )}
          </div>
        </div>
        {/* submenu ss breakpoint */}
        {user ? (
          <section className="hidden ss:flex flex-wrap items-center justify-end p-5">
            <ul className="flex items-center justify-center px-5">
              <Link
                className="text-white font-mono mx-2 border-emerald-600"
                to={"/chats"}
              >
                Chats
              </Link>
            </ul>
            <div
              tabIndex={0}
              onBlur={(e) => {
                setOpenProfileMenu(false);
              }}
              onClick={() => setOpenProfileMenu(!openProfileMenu)}
              className="relative flex items-center justify-center mx-5 cursor-pointer"
            >
              <p className="text-white font-mono">{user.username}</p>
              <i className="ri-arrow-down-s-line text-white mx-1"></i>
              <AnimatePresence>
                {openProfileMenu ? (
                  <FloatMenu onClick={(e) => e.stopPropagation()}>
                    {/* close */}
                    <div className="w-full flex items-center justify-end border-b mb-4">
                      <i
                        onClick={() => setOpenProfileMenu(false)}
                        className="ri-close-line text-3xl"
                      ></i>
                    </div>
                    <div className="w-full flex items-center">
                      <i
                        onClick={logout}
                        className="ri-logout-box-line mx-2 my-1 text-3xl cursor-pointer"
                      ></i>
                      <i className="ri-equalizer-line mx-2 my-1 text-3xl cursor-pointer"></i>
                    </div>
                  </FloatMenu>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
          </section>
        ) : (
          ""
        )}
      </nav>
      <AnimatePresence>
        {user && openSidebar ? <Sidebar toggleSidebar={toggleSidebar} /> : ""}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
