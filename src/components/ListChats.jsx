import React from "react";
import ChatCard from "./ChatCard";

const ListChats = ({ chats }) => {
  return (
    <>
      <ul className="flex flex-col items-center w-full ss:max-w-5xl min-h-full ss:h-[40rem] ss:max-h-[50rem] mx-auto pt-20 ss:mt-16 bg-white rounded-md">
        {chats.map((chat) => (
          <ChatCard key={chat._id} data={chat} />
        ))}
      </ul>
    </>
  );
};

export default ListChats;
