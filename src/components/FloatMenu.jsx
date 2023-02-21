import React from "react";

export const FloatMenu = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="flex flex-col absolute top-10 rightjustify-center bg-white w-fit max-w-sm p-2 rounded-md"
    >
      {children}
    </div>
  );
};
