import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { saveSocket } from "../apis/socket.api";
import useChatContext from "./useChatContext";

export const socketContext = createContext(null);

const SocketContextProvider = (props) => {
  const [socket, setSocket] = useState(null);
  const { chats, chat, to, setTo, updateChat } = useChatContext();
  const connectToSocket = async () => {
    const socket = io("http://localhost:3000");
    socket.on("connect", () => {
      setSocket(socket);
    });
  };

  const [isWriting, setIsWriting] = useState(null);

  useEffect(() => {
    if (isWriting) {
      const chatFind = chats?.find((id) => isWriting.chatID !== id);
      console.log({ chatFind });
      console.log({ chat });
      if (chats) {
        console.log({ chats });
        const newChats = chats.filter((id) => id === isWriting.chatID);
        setChats([...newChats, { ...chatFind, writing: true }]);
      }
      if (chat) {
        if (chat._id === isWriting.chatID && !to.writing) {
          setTo({ ...to, writing: true });
        } else return;
      } else return;
    }
    setTimeout(() => {
      setTo({ ...to, writing: false });
      setIsWriting(null);
    }, 2000);
  }, [isWriting]);

  useEffect(() => {
    if (socket) {
      socket.on("messageReceived", ({ chatData, message, from }) => {
        updateChat(chatData);
      });

      socket.on("messageNotification", (data) => {
        console.log("message notification:", data);
      });

      socket.on("writing", async ({ from, chatID }) => {
        setIsWriting({ from, chatID });
      });
    }

    return () => {
      if (socket) {
        socket.off("connect");
        socket.off("messageReceived");
        socket.off("messageNotification");
        socket.off("writing");
      }
    };
  }, [socket]);

  const value = { socket, connectToSocket };

  return (
    <socketContext.Provider value={value}>
      {props.children}
    </socketContext.Provider>
  );
};

export default SocketContextProvider;
