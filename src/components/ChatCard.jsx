import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";
import "../styles/components/ChatCard.scss";

const ChatCard = ({ data }) => {
  const { members, lastMessage, pendientToView } = data;
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const chattingWithYou = members;
    if (chattingWithYou.length === 1) {
      setFriend(members[0]);
    } else {
      const friend = members.find((member) => member._id !== user._id);
      setFriend(friend);
    }
  }, []);

  return (
    <>
      {friend ? (
        <li
          onClick={() => navigate(`/chats/${friend._id}`)}
          className="w-full flex items-center shadow-sm bg-white my-2 hover:bg-gray-50 cursor-pointer"
        >
          <div className="w-fit p-2">
            <img
              className="min-w-[4.5rem] w-20 ss:w-24"
              src={
                data.image
                  ? data.image
                  : `https://ui-avatars.com/api/?background=404040&color=fff&name=${friend.username}&size=60&rounded=true`
              }
              alt={friend.username}
            />
          </div>
          <section className="username_date_container py-2 ml-5">
            <div className="w-[98%] flex items-center justify-between">
              <p className="w-9/12 text-gray-800 font-mono font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                {friend.username}
              </p>
              {lastMessage ? (
                <small className="font-mono text-xl">
                  {format(new Date(lastMessage.sendAt), "ee/MM/yy|h:maaa")}
                </small>
              ) : (
                ""
              )}
            </div>
            {data.writing ? (
              <p className="font-mono shadow-sm rounded-3xl font-bold w-fit ml-2 text-emerald-600">
                writing...
              </p>
            ) : (
              <>
                {lastMessage ? (
                  <p className="text-gray-800 font-mono text-ellipsis whitespace-nowrap overflow-hidden pr-6">
                    {lastMessage.message}
                  </p>
                ) : (
                  <p className="text-emerald-500 font-semibold font-mono text-ellipsis whitespace-nowrap overflow-hidden">
                    not have messages yet, start a conversation
                  </p>
                )}
              </>
            )}
          </section>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatCard;
