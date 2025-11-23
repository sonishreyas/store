// src/hooks/useFormValidation.js
import { useState } from "react";

const useFormValidation = (initialValues, validators) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues(prev => ({ ...prev, [name]: value }));

    if (validators[name]) {
      const isValid = validators[name](value);
      setErrors(prev => ({ ...prev, [name]: !isValid }));
    }
  };

  const isFormValid = Object.values(errors).every(err => err === false) &&
                      Object.values(values).every(v => v !== "");

  return { values, errors, handleChange, isFormValid };
};

export default useFormValidation;
