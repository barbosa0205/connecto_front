import React from "react";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

import { motion } from "framer-motion";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <motion.aside
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: 200 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="w-2/4 max-w-xl h-screen fixed flex flex-col top-0 right-0 bg-white shadow-md"
    >
      {/* close container */}
      <header className="p-4 flex items-center justify-end border-b">
        <i
          onClick={toggleSidebar}
          className="ri-close-line text-5xl text-emerald-400 cursor-pointer"
        ></i>
      </header>

      <MenuList>
        <MenuItem>Chats</MenuItem>
      </MenuList>

      <footer className="w-full px-4 py-6 flex items-center justify-end bg-gray-700">
        <i className="ri-equalizer-line text-3xl text-white cursor-pointer"></i>
      </footer>
    </motion.aside>
  );
};

export default Sidebar;
