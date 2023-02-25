import { AnimatePresence } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import MessageNotification from "../components/MessageNotification";

export const pushNotificationContext = createContext();

const PushNotificationProvider = (props) => {
  const notifyReceived = new Audio("/sounds/iphone_ding.mp3");
  const [messageNotification, setMessageNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const sleep = (ms) => {
    setTimeout(() => {
      setMessageNotification(null);
    }, [ms]);
  };

  const pushNotification = (notification) => {
    setNotifications([...notifications, notification]);
    sleep(3000);
  };

  const pushMessageNotification = (notification) => {
    notifyReceived.play();
    if (messageNotification) {
      setMessageNotification(null);
    }
    setMessageNotification(notification);
    /*   sleep(3000); */
  };

  const closeMessageNotification = () => {
    setMessageNotification(null);
  };

  const value = {
    notifications,
    messageNotification,
    pushMessageNotification,
    pushNotification,
    sleep,
    closeMessageNotification,
  };

  return (
    <pushNotificationContext.Provider value={value}>
      {props.children}
      <AnimatePresence>
        {messageNotification ? (
          <MessageNotification data={messageNotification} />
        ) : (
          ""
        )}
      </AnimatePresence>
    </pushNotificationContext.Provider>
  );
};

export default PushNotificationProvider;
