// src/pages/RegistrationForm.jsx

import useFormValidation from "../hooks/useFormValidation";
import { validateName, validateEmail, validateMobile, validatePincode } from "../utils/validators";


function RegistrationForm() {

  const validators = {
    name: validateName,
    email: validateEmail,
    mobile: validateMobile,
    pincode: validatePincode,
  };

  const { values, errors, handleChange, isFormValid } = useFormValidation(
    { name: "", email: "", mobile: "", gender: "", role: "", pincode: "" },
    validators
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="form-page">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} className="registration-form">

        <label>
          Name:
          <input name="name" type="text" value={values.name} onChange={handleChange} />
        </label>
        {errors.name && <p className="error-text">Name must be 3-50 chars.</p>}

        <label>
          Email:
          <input name="email" type="text" value={values.email} onChange={handleChange} />
        </label>
        {errors.email && <p className="error-text">Email must be valid & end with @infosys.com</p>}

        <label>
          Mobile Number:
          <input name="mobile" type="text" value={values.mobile} onChange={handleChange} />
        </label>
        {errors.mobile && <p className="error-text">Must be 10 digits.</p>}

        <label>
          Gender:
        </label>
        <div className="radio-group">
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        </div>

        <label>
          Role:
          <select name="role" value={values.role} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="dev">Developer</option>
            <option value="qa">QA</option>
            <option value="manager">Manager</option>
          </select>
        </label>

        <label>
          Pin Code:
          <input name="pincode" type="text" value={values.pincode} onChange={handleChange} />
        </label>
        {errors.pincode && <p className="error-text">Must be 6 digits.</p>}

        <button type="submit" disabled={!isFormValid} className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
