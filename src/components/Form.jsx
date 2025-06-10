import React, { useReducer } from "react";
import PersonalStep from "./PersonalStep";
import AddressStep from "./AddressStep";
import SummaryStep from "./SummaryStep";
import ProgressBar from "./ProgressBar";
import { FormContext } from "../formContext.js";

/* INITIAL DATA OBJECT */
const initialState = {
  step: 1,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: ""
  },
  errors: {}
};

/* STATE MANAGEMENT */
function formReducer(state, action) {
  switch (action.type) {
    case "next": return { ...state, step: state.step + 1 };
    case "prev": return { ...state, step: state.step - 1 };
    case "setData": return { ...state, data: { ...state.data, ...action.payload } };
    case "setErrors": return { ...state, errors: action.payload };
    default: return state;
  }
}

const Form = () => {
  /* HOOKS */
  const [state, dispatch] = useReducer(formReducer, initialState);

  /* COMPONENT */
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <div className="form-container">
        <ProgressBar />
        {state.step === 1 && <PersonalStep />}
        {state.step === 2 && <AddressStep />}
        {state.step === 3 && <SummaryStep />}
      </div>
    </FormContext.Provider>
  );
};

export default Form;
