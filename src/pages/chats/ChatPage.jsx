import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "../../components/Chat";
import Conversation from "../../components/Conversation";
import EnterMessage from "../../components/EnterMessage";
import useAuthContext from "../../context/useAuthContext";

const ChatPage = () => {
  const params = useParams();
  const { user } = useAuthContext();

  const [chat, setChat] = useState(null);

  useEffect(() => {
    const chat = user.chats.find((chat) => chat.id === params.id);
    setChat(chat);
  }, []);

  return (
    <section className="w-full h-screen flex flex-col">
      {/* conversation container */}
      <div className="h-full w-full ">
        {chat && (
          <>
            {/* por mientras esta hardcodeado, luego se tomaran de la db en firebase */}
            <header className="w-full p-2 h-20 flex items-center shadow-sm shadow-gray-200">
              {chat.username}
            </header>
            {/* conversation box */}
            <Chat>
              {chat.conversation.length
                ? chat.conversation.map((message, index) => (
                    <Conversation key={message.messageID} message={message} />
                  ))
                : ""}
            </Chat>
          </>
        )}
      </div>

      {/* enter message container */}
      <EnterMessage chatID={params.id} />
    </section>
  );
};

export default ChatPage;
