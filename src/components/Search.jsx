import React, { useState } from "react";
import useChatContext from "../context/useChatContext";
import useAuthContext from "../context/useAuthContext";
const Search = ({ searchParam }) => {
  const { user } = useAuthContext();
  const { chatsList, setChatsList, setChatsFiltered } = useChatContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    /* filter chats */

    /* si el input esta vacio no sigue con el filtrado */
    if (!e.target.value.trim()) {
      setChatsFiltered(null);
      return;
    }

    const chatsFilter = chatsList.filter((chat) => {
      if (chat.members.length === 1) {
        if (chat.members[0].username.includes(e.target.value)) {
          return chat;
        }
        return;
      }
      if (
        chat.members
          .find((member) => member._id !== user._id)
          .username.includes(e.target.value)
      ) {
        return chat;
      }
    });
    console.log({ chatsFilter });
    setChatsFiltered(chatsFilter);
  };
  return (
    <div className="flex items-cente justify-center w-[80%] max-w-[50rem] mx-auto my-5 border-b-2">
      <input
        onChange={handleSearch}
        value={searchValue}
        placeholder="search a chat"
        className="w-full px-2 placeholder:text-white outline-none bg-transparent text-white"
        type="text"
        autoFocus={searchParam ? true : false}
      />
      <i className="ri-search-2-line text-white font-bold text-4xl pb-2 cursor-pointer"></i>
    </div>
  );
};

export default Search;
