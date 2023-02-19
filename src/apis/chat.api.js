import axios from "axios";

export const getChatApi = async (chatID, token) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/chats/${chatID}`,
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

export const deleteChatApi = async (chatID, userID, token) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/chats/${chatID}?userID=${userID}`,
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
