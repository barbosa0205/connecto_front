import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getChatsApi } from "../../apis/chat.api";
import ContainerBox from "../../components/ContainerBox";
import ListChats from "../../components/ListChats";
import useAuthContext from "../../context/useAuthContext";
import useChatContext from "../../context/useChatContext";
import "../../styles/layouts/MainLayout.scss";
const ChatsPage = () => {
  const { user } = useAuthContext();
  const { chatsList, setChatsList } = useChatContext();
  const [friendsList, setFriendsList] = useState(null);

  const [loadingChats, setLoadingChats] = useState(false);
  const [loadingFriends, setLoadingFriends] = useState(false);

  const getChats = async () => {
    try {
      setLoadingChats(true);
      const chatsData = await getChatsApi({
        userID: user._id,
        token: user.token,
      });
      if (!chatsData.success) {
        console.log({ chatsData });
        setLoadingChats(false);
        return;
      }
      setChatsList(chatsData.chats);
      setLoadingChats(false);
    } catch (error) {
      console.log("error al obtener chats", error);
    }
  };

  const getFriends = async () => {};

  useEffect(() => {
    getChats();
    getFriends();

    return () => {
      setChatsList(null);
    };
  }, []);

  return (
    <div className="flex w-full height">
      {loadingChats ? (
        <ContainerBox>
          <p className="text-3xl font-bold font-mono text-gray-700">
            LOADING...
          </p>
        </ContainerBox>
      ) : (
        <>
          {chatsList && chatsList?.length ? (
            <ListChats chats={chatsList} />
          ) : (
            <ContainerBox>
              <p className="text-gray-800 font-mono text-3xl text-center font-semibold mb-20">
                No chats, start chat with your friends
              </p>
              {/* If has friends, show list of 2 friend, else button to add friends */}
              {}
            </ContainerBox>
          )}
        </>
      )}
    </div>
  );
};

export default ChatsPage;
