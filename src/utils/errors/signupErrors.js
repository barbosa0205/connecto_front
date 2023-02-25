export const signupSubmitErrors = (formData) => {
  let errors = {};
  if (!formData.username.trim().length) {
    errors = { ...errors, username: "the username field not must be empty" };
  }
  if (!formData.email.trim().length) {
    errors = { ...errors, email: "the email field not must be empty" };
  }

  if (
    !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    errors = { ...errors, email: "the email is not valid" };
  }
  if (!formData.password.length) {
    errors = { ...errors, password: "the password field not must be empty" };
  }
  if (formData.password !== formData.re_password) {
    errors = { ...errors, re_password: "passwords are not equals" };
  }

  return errors;
};

export const signupChangeErrors = () => {};
