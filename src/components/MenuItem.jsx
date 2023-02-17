import React from "react";

const MenuItem = ({ children }) => {
  return (
    <li className="text-center cursor-pointer border-b p-2">{children}</li>
  );
};

export default MenuItem;
