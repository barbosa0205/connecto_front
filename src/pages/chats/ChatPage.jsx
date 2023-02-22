import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatApi, exitToChatApi } from "../../apis/chat.api";
import Chat from "../../components/Chat";
import Conversation from "../../components/Conversation";
import EnterMessage from "../../components/EnterMessage";
import useAuthContext from "../../context/useAuthContext";
import useChatContext from "../../context/useChatContext";

import "../../styles/pages/chats/ChatPage.scss";

const ChatPage = () => {
  const params = useParams();
  const { user } = useAuthContext();

  const { chat, setChat, setFrom, setTo, from, to } = useChatContext();

  /*  const cleanup = async ({ userID, chatID, token }) => {
    /* salir del chat *
    await exitToChatApi({
      userID: user._id,
      chatID: chat._id,
      token: user.token,
    });
  }; */

  /* obtener el chat */
  useEffect(() => {
    (async () => {
      const data = await getChatApi({
        userID: user._id,
        id: params.id,
        token: user.token,
      });

      if (data.success) {
        setChat(data.chat);
        /* get from and to Ids */
        const toData = data.chat.members.find((usr) => usr._id === params.id);
        const fromData = data.chat.members.find((usr) => usr._id === user._id);
        setTo(toData);
        setFrom(fromData);
      }
    })();
    return () => {
      setChat(null);
    };
  }, []);

  return (
    <div className="container w-full h-full flex flex-col justify-center">
      <section className="w-full h-full m:h-[95%] max-w-4xl mx-auto flex flex-col shadow-md bg-white rounded-md">
        {/* conversation container */}
        <div className="flex flex-col ss:min-h-[45rem] w-full">
          {chat && from && to && (
            <>
              <header className="w-full p-2 h-20 flex items-center shadow-sm shadow-gray-200">
                {to.username} {to._id === user._id ? "(YOU)" : ""}
              </header>
              {/* conversation box */}

              {chat.conversation.length ? (
                <Chat>
                  {chat.conversation.map((message, index) => (
                    <Conversation key={index} message={message} />
                  ))}
                </Chat>
              ) : (
                <div className="w-full minHeightConversation ss:min-h-[45rem] flex items-center justify-center">
                  <p className="w-72 text-center font-mono text-gray-400 text-3xl">
                    not conversation yet
                  </p>
                </div>
              )}
              {to.writing ? (
                <div className="flex items-center px-6 py-3">
                  <p className="font-mono shadow-sm rounded-3xl px-4 py-2 bg-gray-100 ml-2 text-gray-600">
                    ...
                  </p>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
        {/* enter message container */}
        <EnterMessage chat={chat} />
      </section>
    </div>
  );
};

export default ChatPage;
