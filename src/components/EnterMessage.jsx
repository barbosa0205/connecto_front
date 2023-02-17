import React, { useEffect } from "react";
import useAuthContext from "../context/useAuthContext";
import { useForm } from "../hooks/useForm";
import {
  handleEnterMessageChangeErrors,
  handleEterMessageSubmitErrors,
} from "../utils/errors/enterMesageErrors";

const EnterMessage = ({ chatID }) => {
  const { user, setUser } = useAuthContext();
  const { formData, handleChange, handleSubmit, submited } = useForm(
    {
      message: "",
    },
    handleEnterMessageChangeErrors,
    handleEterMessageSubmitErrors
  );

  useEffect(() => {
    if (submited) {
      /* send message */

      /* obtenemos el chat del usuario */
      let chat = user.chats.find((chat) => chat.id === chatID);

      /* colocamos el nuevo mensaje dentro de la conversación */
      chat.conversation = [
        ...chat.conversation,
        { userId: user.id, messageID: "13u", message: formData.message },
      ];

      /* obenemos el index de el chat */
      let index = user.chats.findIndex((chat) => chat.id === chatID);

      /* creamos un nuevo usuario el cual le cambiaremos el chat con la posicion del index por el nuevo chat */
      let newUser = { ...user };
      newUser.chats[index] = chat;

      /* por ultimo seteamos el nuevo usuario y limpiamos el textarea */
      setUser(newUser);
      formData.message = "";
    }

    return () => {};
  }, [submited]);

  return (
    <div className="w-full flex items-center justify-between p-2 h-28 border-t border-t-gray-200">
      <textarea
        value={formData.message}
        onChange={handleChange}
        name="message"
        className="w-full outline-none"
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
