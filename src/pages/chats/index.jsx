import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChatsApi } from "../../apis/chat.api";
import ListChats from "../../components/ListChats";
import useAuthContext from "../../context/useAuthContext";
import "../../styles/layouts/MainLayout.scss";
const ChatsPage = () => {
  const { user } = useAuthContext();
  const [friendsList, setFriendsList] = useState(null);
  const [chatsList, setChatsList] = useState(null);
  const [loadingChats, setLoadingChats] = useState(false);
  const [loadingFriends, setLoadingFriends] = useState(false);

  const getChats = async () => {
    try {
      const chatsData = await getChatsApi({
        userID: user._id,
        token: user.token,
      });
      if (!chatsData.success) {
        console.log({ chatsData });
        return;
      }
      setChatsList(chatsData.chats);
    } catch (error) {
      console.log("error al obtener chats", error);
    }
  };

  const getFriends = async () => {};

  useEffect(() => {
    getChats();
    getFriends();
  }, []);

  return (
    <div className="flex w-full height">
      {chatsList && chatsList?.length ? (
        <ListChats chats={chatsList} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full ss:max-w-4xl min-h-full ss:h-[40rem] ss:max-h-[50rem] mx-auto pt-20 ss:mt-16 bg-white rounded-md">
          <p className="text-gray-800 font-mono text-3xl text-center font-semibold mb-20">
            No chats, start chat with your friends
          </p>
          {/* If has friends, show list of 2 friend, else button to add friends */}
          {}
        </div>
      )}
    </div>
  );
};

export default ChatsPage;
