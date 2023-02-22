import axios from "axios";

export const signUpApi = async ({ username, email, password }) => {
  try {
    const userData = await axios.post(
      "https://connecto-back.onrender.com:3000/api/v1/signup",
      {
        username,
        email,
        password,
      }
    );
    return {
      success: true,
      token: userData.data.token,
      user: userData.data.user,
    };
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};

export const signInApi = async ({ usernameOrEmail, password }) => {
  try {
    const userData = await axios.post(
      `https://connecto-back.onrender.com:3000/api/v1/signin`,
      {
        usernameOrEmail,
        password,
      }
    );

    return {
      success: true,
      token: userData.data.token,
      user: userData.data.user,
    };
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};

export const verifyTokenApi = async (token) => {
  try {
    const userData = await axios.get(
      `https://connecto-back.onrender.com/api/v1/verifyToken`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return {
      success: true,
      token: userData.data.token,
      user: userData.data.user,
    };
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};
