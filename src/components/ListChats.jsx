import React from "react";
import ChatCard from "./ChatCard";

const ListChats = ({ chats }) => {
  return (
    <>
      {chats.length ? (
        <ul className="flex flex-col items-center w-full ss:max-w-5xl min-h-full ss:h-[50rem] ss:max-h-[90%] mx-auto py-5 ss:mt-16 bg-white rounded-md">
          {chats.map((chat) => (
            <ChatCard key={chat._id} data={chat} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default ListChats;
