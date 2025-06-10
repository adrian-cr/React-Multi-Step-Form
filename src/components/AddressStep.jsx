import React, { useRef, useEffect, useCallback, useContext } from "react";
import { FormContext } from "../formContext.js";

const Step2 = () => {
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
    const {address, city, zip} = state.data;

    if (!address) errors.address = "Address is required."
    else {
      const addressSections = address.trim().split(" ");
      if (addressSections.length < 2 || !addressSections.some(part => /^\d+$/.test(part))) errors.address = "Invalid address.";
    }
    if (!city) errors.city = "City is required."
    if (!zip) errors.zip = "Zipcode is required."
    else if (!(zip.length === 5 && /^\d{5}$/.test(zip))) errors.zip = "Invalid zipcode.";

    dispatch({ type: "setErrors", payload: errors });
    return Object.keys(errors).length === 0;
  };
  const prev = () => {if (validate()) dispatch({ type: "prev" })};
  const next = () => {if (validate()) dispatch({ type: "next" })};

  return (
    <div className="form-step">
      <h2 className="step-title">Address Details</h2>
      <input ref={firstInputRef} name="address" value={state.data.address} onChange={handleChange} placeholder="Address" className="input" />
      <input name="city" value={state.data.city} onChange={handleChange} placeholder="City" className="input" />
      <input name="zip" value={state.data.zip} onChange={handleChange} placeholder="ZIP Code" className="input" />
      <div className="button-group">
        <button onClick={prev} className="button">Back</button>
        <button onClick={next} className="button">Next</button>
      </div>
      {Object.values(state.errors).map((err, idx) => <div key={idx} className="error">{err}</div>)}
    </div>
  );
};

export default Step2;
