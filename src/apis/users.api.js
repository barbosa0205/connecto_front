import axios from "axios";

export const findUserByUsername = async (username, token) => {
  try {
    const data = await axios.get(
      `https://connecto-back.onrender.com/api/v1/users/findUserByUsername?username=${username}`,
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
      "https://connecto-back.onrender.com/api/v1/users/addUser",
      { userID, followedID },
      { headers: { "x-access-token": token } }
    );
    if (data.success) {
      return data;
    }
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};

export const unfollowUser = async ({ unfollowedID, userID, token }) => {
  try {
    const { data } = await axios.patch(
      "https://connecto-back.onrender.com/api/v1/users/unfollowUser",
      { userID, unfollowedID },
      { headers: { "x-access-token": token } }
    );
    console.log("data", data);
    if (data.success) {
      return data;
    }
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};
