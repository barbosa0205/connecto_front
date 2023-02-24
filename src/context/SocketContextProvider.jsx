import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { saveSocket } from "../apis/socket.api";
import { API_URL } from "../constants";
import useChatContext from "./useChatContext";
import usePushNotificationcontext from "./usePushNotificationcontext";
export const socketContext = createContext(null);

const SocketContextProvider = (props) => {
  const { messageNotification, pushMessageNotification } =
    usePushNotificationcontext();

  const [socket, setSocket] = useState(null);
  const { chats, chat, to, setTo, updateChat, chatsList, setChatsList } =
    useChatContext();

  const messageRececived = new Audio("/sounds/receivedMessage.mp3");

  const connectToSocket = async () => {
    const socket = io(API_URL);
    socket.on("connect", () => {
      setSocket(socket);
    });
  };

  const disconnectSocket = () => {
    socket.disconnect();
  };

  const [isWriting, setIsWriting] = useState(null);
  const [messageNotificationReceived, setMessageNotificationReceived] =
    useState(null);

  useEffect(() => {
    if (isWriting) {
      const chatFind = chatsList?.find((id) => isWriting.chatID !== id);

      if (chatsList?.length) {
        console.log({ chatsList });
        const newChats = chatsList.filter((id) => id === isWriting.chatID);
        setChatsList([...newChats, { ...chatFind, writing: true }]);
        setTimeout(() => {
          setChatsList([...newChats, { ...chatFind, writing: false }]);
          setIsWriting(null);
        }, 2000);
      }
      if (chat) {
        if (chat._id === isWriting.chatID && !to.writing) {
          setTo({ ...to, writing: true });
          setTimeout(() => {
            setTo({ ...to, writing: false });
            setIsWriting(null);
          }, 2000);
        } else return;
      } else return;
    }
  }, [isWriting]);

  useEffect(() => {
    if (messageNotificationReceived) {
      const { chatData, from, message, notify } = messageNotificationReceived;

      pushMessageNotification({ notify, from });

      /* preguntar si el usuario esta en la pagina de chats */
      if (chatsList) {
        const findChat = chatsList.find(
          (chat) => chat._id.toString() === chatData._id.toString()
        );
        console.log({ findChat });
        if (findChat) {
          const chatFinded = chatsList.find(
            (chat) => chat._id.toString() === chatData._id.toString()
          );
          chatFinded.lastMessage = message;
          const newChatArray = [...chatsList];
          const index = newChatArray.findIndex(
            (chat) => chat._id.toString() === chatData._id.toString()
          );
          newChatArray[index] = chatFinded;
          setChatsList(newChatArray);
        } else {
          setChatsList([...chatsList, chatData]);
        }
      }
    }
  }, [messageNotificationReceived]);

  useEffect(() => {
    if (socket) {
      socket.on("messageReceived", ({ chatData, message, from }) => {
        updateChat(chatData);
        messageRececived.play();
      });

      socket.on("messageNotification", (data) => {
        setMessageNotificationReceived(data);
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

  const value = { socket, connectToSocket, disconnectSocket };

  return (
    <socketContext.Provider value={value}>
      {props.children}
    </socketContext.Provider>
  );
};

export default SocketContextProvider;
