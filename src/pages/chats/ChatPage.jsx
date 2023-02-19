import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChatApi, deleteChatApi } from "../../apis/chat.api";
import Chat from "../../components/Chat";
import Conversation from "../../components/Conversation";
import EnterMessage from "../../components/EnterMessage";
import useAuthContext from "../../context/useAuthContext";

const ChatPage = () => {
  const params = useParams();
  const { user } = useAuthContext();

  const [chat, setChat] = useState(null);

  useEffect(() => {
    /* obtener el chat */
    (async () => {
      const data = await getChatApi(params.id, user.token);

      if (data.success) {
        setChat(data.chat);
      }
    })();

    return () => {
      (async () => {
        if (!chat?.conversation.length) {
          const data = await deleteChatApi(params.id, user._id, user.token);
        }
      })();
    };
  }, []);

  return (
    <section className="w-full h-full flex flex-col">
      {/* conversation container */}
      <div className="h-full w-full ">
        {chat && (
          <>
            {/* por mientras esta hardcodeado, luego se tomaran de la db en firebase */}
            <header className="w-full p-2 h-20 flex items-center shadow-sm shadow-gray-200">
              {chat.user.username}
            </header>
            {/* conversation box */}

            {chat.conversation.length ? (
              <Chat>
                {chat.conversation.map((message, index) => (
                  <Conversation key={message.messageID} message={message} />
                ))}
              </Chat>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="w-72 text-center font-mono text-gray-400 text-3xl">
                  not conversation yet
                </p>
              </div>
            )}
          </>
        )}
      </div>
      {/* enter message container */}
      <EnterMessage chatID={params.id} />
    </section>
  );
};

export default ChatPage;
