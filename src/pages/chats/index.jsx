import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getChatsApi } from "../../apis/chat.api";
import ContainerBox from "../../components/ContainerBox";
import ListChats from "../../components/ListChats";
import Search from "../../components/Search";
import useAuthContext from "../../context/useAuthContext";
import useChatContext from "../../context/useChatContext";
import "../../styles/layouts/MainLayout.scss";
const ChatsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuthContext();
  const { chatsList, setChatsList, chatsFiltered } = useChatContext();
  const [friendsList, setFriendsList] = useState(null);

  const [loadingChats, setLoadingChats] = useState(false);
  const [loadingFriends, setLoadingFriends] = useState(false);

  useEffect(() => {
    console.log({ searchParams: searchParams.get("search") });
  }, []);

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
          <i className="ri-restart-line text-7xl text-gray-700 animate-spin"></i>
        </ContainerBox>
      ) : (
        <>
          {chatsList && chatsList?.length ? (
            <div className="w-full min-h-full flex-col">
              <Search searchParam={searchParams.get("search")} />
              {!chatsFiltered ? (
                <ListChats chats={chatsList} />
              ) : (
                <>
                  {chatsFiltered.length ? (
                    <ListChats chats={chatsFiltered} />
                  ) : (
                    <div className="w-full flex items-center justify-center max-w-5xl bg-white mx-auto h-[80%]">
                      <p className="text-gray-800 font-mono text-3xl text-center font-semibold mb-20">
                        No chats, start chat with your friends
                      </p>
                      {/* If has friends, show list of 2 friend, else button to add friends */}
                      {}
                    </div>
                  )}
                </>
              )}
            </div>
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
