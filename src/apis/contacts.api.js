import axios from "axios";

export const findUserByUsername = async (username, token) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/api/v1/findUserByUsername?username=${username}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );

    return {
      success: true,
      data: data.data.persons,
    };
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};
