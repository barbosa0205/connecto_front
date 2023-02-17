export const signinSubmitErrors = ({ usernameOrEmail, password }) => {
  let errors = {};

  if (!usernameOrEmail.length) {
    errors = { ...errors, usernameOrEmail: "The username must not be empty" };
  }

  if (!password.length) {
    errors = { ...errors, password: "The password must not be empty" };
  }

  return errors;
};

export const signinChangeErrors = () => {};
