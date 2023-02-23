import React, { useContext } from "react";
import { pushNotificationContext } from "./PushNotificationProvider";
const usePushNotificationcontext = () => {
  const contextValue = useContext(pushNotificationContext);

  return contextValue;
};

export default usePushNotificationcontext;
