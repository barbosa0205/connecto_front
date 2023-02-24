import React, { useEffect, useState } from "react";
import { addChatToUserApi, sendMessageApi } from "../apis/chat.api";
import useAuthContext from "../context/useAuthContext";
import useChatContext from "../context/useChatContext";
import useSocketContext from "../context/useSocketContext";
import { useForm } from "../hooks/useForm";
import {
  handleEnterMessageChangeErrors,
  handleEterMessageSubmitErrors,
} from "../utils/errors/enterMesageErrors";

const EnterMessage = () => {
  const sendMessageAudio = new Audio("/sounds/sendMessage.mp3");
  const { user, setUser } = useAuthContext();
  const { chat, to, from, updateChat } = useChatContext();
  const { socket } = useSocketContext();
  const { formData, handleChange, handleSubmit, submited, restartSubmit } =
    useForm(
      {
        message: "",
      },
      handleEnterMessageChangeErrors,
      handleEterMessageSubmitErrors
    );

  const [isWriting, setIsWriting] = useState(false);

  const sendMessage = async () => {
    try {
      const resp = await sendMessageApi({
        chatID: chat._id,
        from: from._id,
        to: to._id,
        message: { message: formData.message, sendAt: new Date() },
        token: user.token,
      });
      if (resp.toSocket) {
        socket.emit("messageReceived", {
          chatID: chat._id,
          toSocket: resp.toSocket,
          fromID: user._id,
          toID: to._id,
        });
      }
      return resp;
    } catch (error) {
      console.log(error);
    }
  };

  const writing = () => {
    setIsWriting(true);
    socket.emit("writing", { to, from, chatID: chat._id });
    setTimeout(() => {
      setIsWriting(false);
    }, 3000);
  };

  const addChatToUser = async () => {
    const resp = await addChatToUserApi({
      chatID: chat._id,
      to,
      token: user.token,
    });

    if (resp.success) {
      /* si el usuario al que se le envio el mensaje tiene un socket asignado le enviamos la notificación de que llego un nuevo mensaje */
    }
  };

  useEffect(() => {
    (async () => {
      if (submited) {
        /* si la conversacion esta vacia le creamos un chat al usuario que recivio el mensaje */

        addChatToUser();

        /* enviamos mensaje */
        const data = await sendMessage();

        /* actualizamos el chat con la nueva conversacion*/
        updateChat(data.chatData);

        sendMessageAudio.play();

        /* limpiamos el input */
        formData.message = "";

        /* submited vuelve a false para poder enviar de nuevo otro mensaje */
        restartSubmit();
      }
    })();
    return () => {};
  }, [submited]);

  return (
    <div className="w-full flex items-center justify-between px-5 h-28 border-t border-t-gray-200">
      <textarea
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        value={formData.message}
        onChange={(e) => {
          handleChange(e);
          /* enviar notificacion al usuario de que estas escribiendo */
          writing();
        }}
        name="message"
        className="w-full outline-none resize-none"
        type="text"
        placeholder="type a message"
      />
      <button
        onClick={handleSubmit}
        className="bg-gray-800 text-white px-8 py-2 mx-2 rounded-3xl"
      >
        send
      </button>
    </div>
  );
};

export default EnterMessage;
