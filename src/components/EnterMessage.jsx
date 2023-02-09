import React from "react";

const EnterMessage = () => {
  return (
    <div className="w-full flex items-center justify-between p-2 h-28 border-t border-t-gray-200">
      <textarea
        className="w-full outline-none"
        type="text"
        placeholder="type a message"
      />
      <button className="bg-gray-800 text-white px-8 py-2 mx-2 rounded-3xl">
        send
      </button>
    </div>
  );
};

export default EnterMessage;
