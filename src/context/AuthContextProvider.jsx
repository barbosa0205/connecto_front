import React, { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const authUser = (username, password) => {
    setUser({
      id: 1,
      username,
      password,
      chats: [
        {
          username: "mi bb",
          pendientToView: false,
          lastMessage: {
            message: "Holiwis",
            time: new Date(),
          },
        },
        {
          username: "jr facheritoooooooooo°°°°°°°°°",
          pendientToView: false,
          lastMessage: {
            message: "papa prrrrrruuuuuuuuuuuuuuuuuuuuuuuuuuuu!",
            time: new Date(),
          },
        },
      ],
    });
  };

  const logout = () => setUser(null);

  const value = { user, authUser, logout };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
