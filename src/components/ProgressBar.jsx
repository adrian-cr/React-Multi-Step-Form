import React, { useContext, useMemo } from "react";
import { FormContext } from "../formContext.js";

const ProgressBar = () => {
  const { state } = useContext(FormContext);
  const progress = useMemo(() => (state.step / 3) * 100, [state.step]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
