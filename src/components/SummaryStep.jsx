import React, { useContext } from "react";
import { FormContext } from "../formContext.js";

const SummaryStep = () => {
  /* HOOKS */
  const { state, dispatch } = useContext(FormContext);
  const prev = () => dispatch({ type: "prev" });
  const submit = () => alert("Form submitted. You may close the window now. Thank you! :)");

  /* STATE DATA */
  const { firstName, lastName, email, address, city, zip } = state.data;

  /* COMPONENT */
  return (
    <div className="form-step">
      <h2 className="step-title">Confirm and Submit</h2>
      <div className="summary-box">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>ZIP Code:</strong> {zip}</p>
      </div>
      <div className="button-group">
        <button onClick={prev} className="button">Back</button>
        <button onClick={submit} className="button submit-btn">Submit</button>
      </div>
    </div>
  );
};
export default SummaryStep;
