import React, { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const authUser = (username, password) => {
    setUser({
      id: "wicho1",
      username,
      password,
      /* chats [] */
      chats: [
        {
          id: "1",
          username: "mi bb",
          pendientToView: false,
          /* message {} */
          lastMessage: {
            messageId: "123",
            message: "Holiwis",
            time: new Date(),
          },
          /* conversation */
          conversation: [
            /* message {} */
            {
              messageID: "456",
              userId: "wicho1",
              message: "Hola morr uwu",
              time: new Date(),
            },
            {
              messageID: "123",
              userId: "keila1",
              message: "Holiwis",
              time: new Date(),
            },
            {
              messageID: "012",
              userId: "wicho1",
              message: "comotas? 💟",
              time: new Date(),
            },
            {
              messageID: "345",
              userId: "keila1",
              message:
                "fhasfuhidhadifhdiahfa hadifhaidhfia hiuahdfiushif uhiuahfdiusahfiu hiusdhfiuashfiu dahdsifuh iushfiusahf iuahsf aishfiushf uihsafiuhsaiufh isuhfiu hsaifsaihfhuis.",
              time: new Date(),
            },
          ],
        },
        {
          id: "2",
          username: "jr facherito",
          pendientToView: false,
          /* message {} */
          lastMessage: {
            messageID: "123",
            message: "papa bpprrruu!",
            time: new Date(),
          },
          /* conversation */
          conversation: [
            /* message {} */
            {
              messageID: "123",
              userId: "jr1",
              message: "papa bpprrruu!",
              time: new Date(),
            },
          ],
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
