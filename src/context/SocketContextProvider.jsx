import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { saveSocket } from "../apis/socket.api";

export const socketContext = createContext(null);

const SocketContextProvider = (props) => {
  const [socket, setSocket] = useState(null);

  const connectToScket = (userID, token) => {
    const socket = io("http://localhost:3000");
    socket.on("connect", () => {
      setSocket({ socket });
      saveSocket({ socket: socket.id, userID, token });
    });
  };

  const value = { connectToScket };

  return (
    <socketContext.Provider value={value}>
      {props.children}
    </socketContext.Provider>
  );
};

export default SocketContextProvider;
