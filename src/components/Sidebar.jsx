import React, { useRef } from "react";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import useAuthContext from "../context/useAuthContext";
import { motion } from "framer-motion";

const Sidebar = ({ toggleSidebar }) => {
  const { user, logout } = useAuthContext();
  return (
    <>
      {user && (
        <motion.aside
          initial={{ opaciti: 0, x: 300 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{
            x: 300,
            transition: {
              ease: [0.2, 0.5, 0.8, 1],
            },
          }}
          transition={{
            default: { ease: [0.2, 0.3, 0.4, 1] },
            duration: 0.3,
          }}
          className="w-2/4 max-w-xl h-screen fixed flex flex-col top-0 right-0 bg-white shadow-md ss:hidden"
        >
          <div className="w-full h-full flex flex-col justify-between">
            <header className="p-4 flex items-center justify-between border-b">
              <p>{user.username}</p>

              {/* close  */}
              <i
                onClick={toggleSidebar}
                className="ri-close-line text-5xl text-emerald-400 cursor-pointer"
              ></i>
            </header>

            <MenuList>
              <MenuItem onClick={toggleSidebar} to={"/chats"}>
                Chats
              </MenuItem>
            </MenuList>

            <footer className="w-full px-4 py-6 flex items-center justify-end bg-gray-700">
              <i
                onClick={logout}
                className="ri-logout-box-line mx-2 text-3xl text-white cursor-pointer"
              ></i>
              <i className="ri-equalizer-line mx-2 text-3xl text-white cursor-pointer"></i>
            </footer>
          </div>
        </motion.aside>
      )}
    </>
  );
};

export default Sidebar;
