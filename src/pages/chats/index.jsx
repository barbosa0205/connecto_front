import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListChats from "../../components/ListChats";
import useAuthContext from "../../context/useAuthContext";

const ChatsPage = () => {
  const { user } = useAuthContext();

  const [chatsList, setChatsList] = useState(null);

  return (
    <>
      {chatsList && chatsList?.length ? (
        <ListChats chats={user.chats} />
      ) : (
        <p>No chats, start chat with your friends</p>
        /* If has friends, show list of 2 friend, else button to add friends */
      )}
    </>
  );
};

export default ChatsPage;
