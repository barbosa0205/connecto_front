import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../apis/users.api";
import useAuthContext from "../context/useAuthContext";

const UserItem = ({ data }) => {
  const { user, setUser } = useAuthContext();
  const [followed, setFollowed] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const contacts = user.contacts;
    const isFollowed = contacts.find((c) => c === data._id);
    if (!isFollowed) return;
    setFollowed(true);
  }, []);

  return (
    <li className="p-2 w-full border-t last:border-b flex items-center justify-center">
      <Link
        to={`/chats/${data._id}`}
        className="text-white text-2xl font-mono font-semibold mx-2 cursor-pointer"
      >
        {data.username}
      </Link>
      {loading ? (
        <button className="mx-2 px-2 bg-gray-400 rounded-md">Loading</button>
      ) : (
        <>
          {followed ? (
            <button
              onClick={async () => {
                setLoading(true);
                const unfollowed = await unfollowUser({
                  unfollowedID: data._id,
                  userID: user._id,
                  token: user.token,
                });
                if (!unfollowed.success) {
                  setLoading(false);
                  return;
                }

                setFollowed(false);
                /* remove the contact */
                let contacts = user.contacts.filter(
                  (contact) => contact._id === data._id
                );

                setUser({ ...user, contacts });
                setLoading(false);
              }}
              className="mx-2 px-2 bg-gray-500 text-white font-mono text-2xl rounded-md"
            >
              UNFOLLOW
            </button>
          ) : (
            <button
              onClick={async () => {
                setLoading(true);
                const followed = await followUser({
                  followedID: data._id,
                  userID: user._id,
                  token: user.token,
                });
                if (!followed.success) return;

                setFollowed(true);
                /* save the contact */
                let contacts = user.contacts;
                contacts = [data._id, ...contacts];
                setUser({ ...user, contacts });
                setLoading(false);
              }}
              className="mx-2 px-2 bg-emerald-400 rounded-md"
            >
              ADD
            </button>
          )}
        </>
      )}
    </li>
  );
};

export default UserItem;
