import React, { createContext, useState } from "react";

export const chatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState(null);
  const [chat, setChat] = useState(null);
  const [chatsList, setChatsList] = useState(null);
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
    chatsList,
    setChatsList,
    updateChat,
  };
  return <chatContext.Provider value={value}>{children}</chatContext.Provider>;
};

export default ChatContextProvider;
