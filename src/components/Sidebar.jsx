import React from "react";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white">
      {/* close container */}
      <div className="p-4 flex items-center justify-end border-b">
        <i
          onClick={toggleSidebar}
          className="ri-close-line text-5xl text-emerald-400 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default Sidebar;
