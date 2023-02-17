import React from "react";

const UserItem = ({ data }) => {
  return (
    <li className="p-2 w-full border-t border-b flex items-center justify-center">
      <p className="text-white text-2xl font-mono mx-2">{data.username}</p>
      <button className="mx-2 px-2 bg-emerald-400 rounded-md">ADD</button>
    </li>
  );
};

export default UserItem;
