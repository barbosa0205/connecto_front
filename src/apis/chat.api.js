import axios from "axios";

export const getChatsApi = async ({ userID, token }) => {
  try {
    const { data } = await axios.get(
      `https://connecto-back.onrender.com/api/v1/chats/?userID=${userID}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    if (data.success) {
      console.log("chatsData", data);
      return {
        success: true,
        chats: data.chats,
      };
    }
  } catch (error) {
    return {
      error: error.response.data.error,
    };
  }
};

export const getChatApi = async ({ userID, id, token }) => {
  try {
    const { data } = await axios.get(
      `https://connecto-back.onrender.com/api/v1/chats/${id}?userID=${userID}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    if (data.success) {
      console.log("data chat", data);
      return {
        success: true,
        chat: data.chat,
      };
    }
  } catch (error) {
    return {
      error: error.response.data.error,
    };
  }
};

export const deleteChatApi = async ({ id, userID, token }) => {
  try {
    const { data } = await axios.delete(
      `https://connecto-back.onrender.com/api/v1/chats/${id}?userID=${userID}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    if (data.success) {
      return {
        success: true,
        message: data.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.response.data.error,
    };
  }
};

export const sendMessageApi = async ({ chatID, from, to, message, token }) => {
  const { data } = await axios.post(
    "https://connecto-back.onrender.com/api/v1/chats/sendMessage",
    { chatID, from, to, message },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return data;
};

export const addChatToUserApi = async ({ chatID, to, token }) => {
  try {
    /* AQUI ME QUEDE */
    const { data } = await axios.post(
      "https://connecto-back.onrender.com/api/v1/chats/addChatToUser",
      {
        to,
        chatID,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return data;
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const exitToChatApi = async ({ userID, token }) => {
  try {
    const { data } = await axios.patch(
      `https://connecto-back.onrender.com/api/v1/chats/exitToChat`,
      {
        userID,
        chatID,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    if (data.success) {
      return {
        success: true,
        message: data.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.response.data.error,
    };
  }
};
