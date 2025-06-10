import React, { useRef, useEffect, useCallback, useContext } from "react";
import { FormContext } from "../formContext.js";

const PersonalStep = () => {
  /* HOOKS */
  const { state, dispatch } = useContext(FormContext);
  const firstInputRef = useRef();
  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);
  const handleChange = useCallback((e) => {
    dispatch({ type: "setData", payload: { [e.target.name]: e.target.value } });
  }, [dispatch]);

  /* FUNCTIONS */
  const validate = () => {
    const errors = {};
    const {firstName, lastName, email} = state.data;

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required.";
    if (!email) errors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email.";

    dispatch({ type: "setErrors", payload: errors });
    return Object.keys(errors).length === 0;
  };
  const next = () => {
    if (validate()) dispatch({ type: "next" });
  };

  /* COMPONENT */
  return (
    <div className="form-step">
      <h2 className="step-title">Personal Information</h2>
      <input ref={firstInputRef} name="firstName" value={state.data.firstName} onChange={handleChange} placeholder="First Name" className="input" />
      <input name="lastName" value={state.data.lastName} onChange={handleChange} placeholder="Last Name" className="input" />
      <input name="email" value={state.data.email} onChange={handleChange} placeholder="Email" className="input" />
      <div className="button-group">
        <button onClick={next} className="button">Next</button>
      </div>
      {Object.values(state.errors).map((err, idx) => <div key={idx} className="error">{err}</div>)}
    </div>
  );
};

export default PersonalStep;
