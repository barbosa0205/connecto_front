import React from "react";
import useAuthContext from "../context/useAuthContext";

const Conversation = ({ message }) => {
  const { user } = useAuthContext();

  return (
    <div
      key={message.id}
      className={`w-full p-2 flex items-center ${
        message.userId === user.id ? "justify-end" : "justify-start"
      }`}
    >
      {/* chat balloon */}
      <div
        className={`shadow-sm rounded-3xl px-4 py-1 ${
          message.userId === user.id
            ? "bg-emerald-200 mr-2"
            : "bg-gray-100 ml-2"
        }`}
      >
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default Conversation;
