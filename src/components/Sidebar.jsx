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
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="w-2/4 max-w-xl h-screen fixed flex flex-col top-0 right-0 bg-white shadow-md ss:hidden"
        >
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
        </motion.aside>
      )}
    </>
  );
};

export default Sidebar;
