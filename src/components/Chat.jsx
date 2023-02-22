import React from "react";
import "../styles/pages/chats/ChatPage.scss";
const Chat = ({ children }) => {
  return (
    <div className="maxHeightConversation toBottom w-full h-full overflow-y-scroll flex flex-col-reverse  p-5">
      {children}
    </div>
  );
};

export default Chat;
