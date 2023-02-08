import React from "react";
import ChatCard from "./ChatCard";

const ListChats = ({ chats }) => {
  return (
    <>
      {!chats?.length ? (
        <p>No chats, add a new Contact</p>
      ) : (
        <ul>
          {chats.map((chat) => (
            <ChatCard key={chat.username} data={chat} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ListChats;
