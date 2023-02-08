import { format } from "date-fns";
import React from "react";
import "../styles/components/ChatCard.scss";
const ChatCard = ({ data }) => {
  const { username, lastMessage, pendientToView } = data;

  return (
    <li className="w-full flex items-center shadow-sm bg-white my-2 hover:bg-gray-50 cursor-pointer">
      <div className="w-fit px-2">
        <img
          className="min-w-[4.5rem] w-20"
          src={
            data.image
              ? data.image
              : `https://ui-avatars.com/api/?background=404040&color=fff&name=${username}&size=60&rounded=true`
          }
          alt={username}
        />
      </div>
      <section className="username_date_container py-2">
        <div className="flex items-center justify-between">
          <p className="w-9/12 text-gray-800 font-mono font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
            {username}
          </p>
          <small className="font-mono px-2 text-lg">
            {format(lastMessage.time, "ee/MM/yy")}
          </small>
        </div>
        <p className="text-gray-800 font-mono text-ellipsis whitespace-nowrap overflow-hidden">
          {lastMessage.message}
        </p>
      </section>
    </li>
  );
};

export default ChatCard;
