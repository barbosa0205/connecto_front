import React, { createContext, useState } from "react";

export const chatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState(null);

  const [to, setTo] = useState(null);
  const [from, setFrom] = useState(null);

  const updateChat = (chatData) => {
    setChat(chatData);
  };

  const value = {
    chat,
    setChat,
    to,
    setTo,
    from,
    setFrom,
    updateChat,
  };
  return <chatContext.Provider value={value}>{children}</chatContext.Provider>;
};

export default ChatContextProvider;
