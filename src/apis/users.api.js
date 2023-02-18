import axios from "axios";

export const findUserByUsername = async (username, token) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/api/v1/users/findUserByUsername?username=${username}`,
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

export const followUser = async ({ followedID, userID, token }) => {
  try {
    const { data } = await axios.patch(
      "http://localhost:3000/api/v1/users/addUser",
      { userID, followedID },
      { headers: { "x-access-token": token } }
    );
    if (data.success) {
      return { success: true, message: data.message };
    }
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};
