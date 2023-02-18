import React, { createContext, useEffect, useState } from "react";
import { verifyTokenApi } from "../apis/auth.api";
import useSocketContext from "./useSocketContext";
export const authContext = createContext(null);

const AuthContextProvider = (props) => {
  const { connectToScket } = useSocketContext();

  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      /* verificar si el token esta guardado en el localSorage*/
      const token = localStorage.getItem("connecto_user_token");

      if (!token) return;

      /* verificar en el backend si el token es valido */
      const data = await verifyTokenApi(token);
      if (!data.success) return;

      authUser({ ...data.user, token });

      /* conectamos al socket */
      connectToScket(data.user._id, token);
    })();
  }, []);

  const authUser = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("connecto_user_token");
  };

  const value = { user, authUser, setUser, logout };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthContextProvider;
