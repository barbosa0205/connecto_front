import React from "react";
import ChatCard from "./ChatCard";
import "../styles/components/ListChats.scss";
const ListChats = ({ chats }) => {
  return (
    <>
      {chats.length ? (
        <ul className="flex flex-col items-center w-full height ss:min-h-[80%] max-h-[80%] ss:max-w-5xl mx-auto py-5 ss:mt-16 bg-white rounded-md overflow-y-scroll">
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
