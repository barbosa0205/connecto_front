import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ children, to, ...rest }) => {
  return (
    <Link
      {...rest}
      to={to}
      className="block text-center cursor-pointer border-b p-2"
    >
      {children}
    </Link>
  );
};

export default MenuItem;
