import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyTokenApi } from "../apis/auth.api";
import { deleteMemberOnChatApi } from "../apis/chat.api";
import useSocketContext from "./useSocketContext";
export const authContext = createContext(null);

const AuthContextProvider = (props) => {
  const { socket, connectToSocket, disconnectSocket } = useSocketContext();
  const [socketSaved, setSocketSaved] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    /* guardamos el socket en el usuario */
    if (socket && user && !socketSaved) {
      socket.emit("saveSocket", { userID: user._id });
      setSocketSaved(true);
    }
  }, [socket, user]);

  useEffect(() => {
    (async () => {
      /* verificar si el token esta guardado en el localSorage*/
      const token = localStorage.getItem("connecto_user_token");

      if (!token) return;

      /* verificar en el backend si el token es valido */
      const data = await verifyTokenApi(token);
      if (!data.success) return;

      authUser({ ...data.user, token });
      console.log("navega la conha de tu hermanaa");

      /* conectamos al socket */
      connectToSocket(data.user._id, token);
    })();
  }, []);
  const deleteMemberOnChat = async () => {
    const data = await deleteMemberOnChatApi({
      userID: user._id,
      token: user.token,
    });
  };
  const authUser = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("connecto_user_token");
    disconnectSocket();
  };

  const value = { user, authUser, setUser, logout, deleteMemberOnChat };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
