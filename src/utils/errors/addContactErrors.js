export const addContactChangeErrors = () => {};

export const addContactSubmitErrors = ({ username }) => {
  let errors = {};
  if (!username.trim()) {
    errors = { ...errors, username: "empty field" };
  }
  return errors;
};
