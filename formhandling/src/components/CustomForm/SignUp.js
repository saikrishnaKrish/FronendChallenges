import React, { useState } from "react";
import "./SignupStyle.css";
import { signUpFormData } from "./signupFormValidation";

const SignupForm = () => {
  const signUpFormFields = {
    firstName: signUpFormData.firstName.defaultValue,
    lastName: signUpFormData.lastName.defaultValue,
    phoneNumber: signUpFormData.phoneNumber.defaultValue,
    address: signUpFormData.address.defaultValue
  };

  const signUpFormFieldsErr = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    address: null
  };

  const [signUpForm, setSignUpForm] = useState(signUpFormFields);
  const [signUpFormFieldMsg, setSignUpFormFieldsErr] = useState(
    signUpFormFieldsErr
  );

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.id);

    setSignUpForm({
      ...signUpForm,
      [e.target.id]: e.target.value
    });
    const fieldInfo = signUpFormData[e.target.id];
    console.log("formid", e.target.id, "value", e.target.value);
    console.log("validation", fieldInfo.validation(e.target.value));

    setSignUpFormFieldsErr({
      ...signUpFormFieldMsg,
      [e.target.id]: fieldInfo.validation(e.target.value)
    });
  };

  const handleSubmit = () => {
    console.log("form submitted Successfully!!!");
    alert(JSON.stringify(signUpForm));
  };
  return (
    <div>
      <h1>Custom Field Validation </h1>
      <div>Sign up form</div>
      <form>
        <label>First Name</label>
        <input
          type="text"
          id="firstName"
          value={signUpForm.firstName}
          onChange={(e) => handleInputChange(e)}
        />
        {signUpFormFieldMsg.firstName != null && (
          <div style={{ color: "red" }}>{signUpFormFieldMsg.firstName}</div>
        )}

        <label>Last Name Name</label>
        <input
          type="text"
          id="lastName"
          value={signUpForm.lastName}
          onChange={(e) => handleInputChange(e)}
        />
        {signUpFormFieldMsg.lastName != null && (
          <div style={{ color: "red" }}>{signUpFormFieldMsg.lastName}</div>
        )}

        <label>Phone number</label>
        <input
          type="text"
          id="phoneNumber"
          value={signUpForm.phoneNumber}
          onChange={(e) => handleInputChange(e)}
        />
        {signUpFormFieldMsg.phoneNumber != null && (
          <div style={{ color: "red" }}>{signUpFormFieldMsg.phoneNumber}</div>
        )}

        <label>Address</label>
        <textarea
          type="textarea"
          id="address"
          rows="4"
          cols="20"
          value={signUpForm.address}
          onChange={(e) => handleInputChange(e)}
        />
        {signUpFormFieldMsg.address != null && (
          <div style={{ color: "red" }}>{signUpFormFieldMsg.address}</div>
        )}
        {/* {JSON.stringify(signUpFormFieldMsg)} */}
      </form>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignupForm;
