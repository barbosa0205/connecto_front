import React, { createContext, useEffect, useState } from "react";

export const pushNotificationContext = createContext();

const PushNotificationProvider = (props) => {
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
    if (messageNotification) {
      setMessageNotification(null);
    }
    setMessageNotification(notification);
    sleep(3000);
  };

  const value = {
    notifications,
    messageNotification,
    pushMessageNotification,
    pushNotification,
    sleep,
  };

  return (
    <pushNotificationContext.Provider value={value}>
      {props.children}
      {messageNotification ? (
        <div className="absolute top-0 left-0 w-full flex items-center justify-center bg-transparent">
          <p className="">NOTIFY</p>
        </div>
      ) : (
        ""
      )}
    </pushNotificationContext.Provider>
  );
};

export default PushNotificationProvider;
