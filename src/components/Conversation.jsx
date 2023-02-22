import React, { useEffect } from "react";
import useAuthContext from "../context/useAuthContext";
import useChatContext from "../context/useChatContext";

const Conversation = ({ message }) => {
  const { user } = useAuthContext();

  useEffect(() => {}, []);

  return (
    <div
      className={`w-full py-2 px-5 flex items-center ${
        message.userId === user._id ? "justify-end" : "justify-start"
      }`}
    >
      {/* chat balloon */}
      <div
        className={`shadow-sm rounded-3xl px-4 py-2 ${
          message.userId === user._id
            ? "bg-emerald-200 mr-2"
            : "bg-gray-100 ml-2"
        }`}
      >
        <p className="font-mono text-gray-600 break-all">{message.message}</p>
      </div>
    </div>
  );
};

export default Conversation;
