import { useContext } from "react";

import { socketContext } from "./SocketContextProvider";

const useSocketContext = (props) => {
  const contextValue = useContext(socketContext);

  return contextValue;
};

export default useSocketContext;
