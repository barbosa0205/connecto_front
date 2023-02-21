import React from "react";

const Chat = ({ children }) => {
  return (
    <div className="w-full h-[85%] overflow-y-scroll flex flex-col justify-end p-5">
      {children}
    </div>
  );
};

export default Chat;
