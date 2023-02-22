import React from "react";

const ContainerBox = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full ss:max-w-4xl min-h-full ss:h-[50rem] ss:max-h-[90%] mx-auto pt-20 ss:mt-16 bg-white rounded-md">
      {children}
    </div>
  );
};

export default ContainerBox;
