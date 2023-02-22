import axios from "axios";

export const saveSocket = async ({ socket, userID, token }) => {
  try {
    console.log({ socket, userID });
    const data = await axios.patch(
      "https://connecto-back.onrender.com/api/v1/socket",
      {
        socket,
        userID,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};
