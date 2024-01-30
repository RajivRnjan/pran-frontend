import React from "react";
import BarLoader from "react-spinners/BarLoader";

function spinner() {
  return (
    <div className="spinner">
      <BarLoader width="100vw" color="#00ADEF" />
    </div>
  );
}

export default spinner;
