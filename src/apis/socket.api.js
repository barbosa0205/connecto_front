import axios from "axios";
import { API_URL } from "../constants";

export const saveSocket = async ({ socket, userID, token }) => {
  try {
    console.log({ socket, userID });
    const data = await axios.patch(
      `${API_URL}/api/v1/socket`,
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
