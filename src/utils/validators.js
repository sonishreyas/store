export const validateName = (value) => value.length >= 3 && value.length <= 50;

export const validateEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.endsWith("@infosys.com");

export const validateMobile = (value) => /^[0-9]{10}$/.test(value);

export const validatePincode = (value) => /^[0-9]{6}$/.test(value);