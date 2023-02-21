import React, { useState } from "react";

export const useForm = (formValues, handleChangeErrors, handleSubmitErrors) => {
  const [formData, setFormData] = useState(formValues);
  const [submitErrors, setSubmitErrors] = useState(null);
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    // console.log(target.defaultValue)
    const errors = handleChangeErrors(e.target.name, e.target.value);
    if (errors) return;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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

  const restartSubmit = () => {
    setSubmited(false);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    submitErrors,
    submited,
    restartSubmit,
  };
};
