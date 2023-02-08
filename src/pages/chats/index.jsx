import React from "react";
import { Link } from "react-router-dom";
import ListChats from "../../components/ListChats";
import useAuthContext from "../../context/useAuthContext";

const ChatsPage = () => {
  const { user } = useAuthContext();

  return <ListChats chats={user.chats} />;
};

export default ChatsPage;
