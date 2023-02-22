import React from "react";
import "../styles/pages/chats/ChatPage.scss";
const Chat = ({ children }) => {
  return (
    <div className="minHeightConversation w-full overflow-y-scroll flex flex-col justify-end p-5">
      {children}
    </div>
  );
};

export default Chat;
