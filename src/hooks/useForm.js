import React, { useState } from "react";

export const useForm = (formValues, handleChangeErrors, handleSubmitErrors) => {
  const [formData, setFormData] = useState(formValues);
  const [submitErrors, setSubmitErrors] = useState(null);
  const [submited, setSubmited] = useState(false);

  const handleChange = ({ target }) => {
    // console.log(target.defaultValue)
    const errors = handleChangeErrors(target.name, target.value);
    if (errors) return;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    const errors = handleSubmitErrors(formData);
    if (Object.keys(errors).length) {
      setSubmitErrors(errors);
    } else {
      setSubmited(true);
    }
  };

  return { formData, handleChange, handleSubmit, submitErrors, submited };
};
