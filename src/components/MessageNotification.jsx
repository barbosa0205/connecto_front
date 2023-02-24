import React from "react";
import { motion } from "framer-motion";
import usePushNotificationcontext from "../context/usePushNotificationcontext";
const MessageNotification = ({ data }) => {
  const { closeMessageNotification } = usePushNotificationcontext();

  return (
    <motion.section
      initial={{ opaciti: 0, y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: -100,
        opacity: 0,
        transition: {
          ease: [0.2, 0.5, 0.8, 1],
        },
      }}
      transition={{
        default: { ease: [0.2, 0.3, 0.4, 1] },
        duration: 0.3,
      }}
      className="flex flex-col fixed left-0 right-0 top-5 mx-auto w-[50%] min-w-[20rem] bg-white backdrop-blur-sm bg-opacity-50 px-2 py-1 rounded-md"
    >
      <div className="px-2 flex items-center justify-end">
        <i
          onClick={closeMessageNotification}
          className="ri-close-line cursor-pointer"
        ></i>
      </div>
      <div className="w-full flex items-center">
        <img
          className="w-20 ss:w-24"
          src={
            data.from.image
              ? data.from.image
              : `https://ui-avatars.com/api/?background=404040&color=fff&name=${data.from.username}&size=60&rounded=true`
          }
          alt={data.from.username}
        />
        <div className="flex flex-col justify-center overflow-hidden">
          <h3 className="mx-2 font-semibold font-mono text-white text-ellipsis whitespace-nowrap overflow-hidden">
            {data.from.username}
          </h3>
          <p className="font-mono mx-2 text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
            {data.notify.message}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default MessageNotification;
