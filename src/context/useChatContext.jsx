import React, { useContext } from "react";
import { chatContext } from "./ChatContextProvider";

const useChatContext = () => {
  const chatContextValue = useContext(chatContext);

  return chatContextValue;
};

export default useChatContext;
