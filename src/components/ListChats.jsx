import React from "react";
import ChatCard from "./ChatCard";

const ListChats = ({ chats }) => {
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ChatCard key={chat.username} data={chat} />
        ))}
      </ul>
    </>
  );
};

export default ListChats;
