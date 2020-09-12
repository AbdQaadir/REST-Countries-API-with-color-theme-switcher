import React from "react";
import LoadingIcon from "./loading.svg";

import "./Loading.css";

function Loading() {
  return (
    <div
      className="row bg-white align-items-center justify-content-center mx-0"
      id="loading"
    >
      <div className="col-xl-6 col-10 text-center">
        <h5 className="text-dark" style={{ marginBottom: -45 }}>
          Try to dey calm down, na d data I dey fetch.
        </h5>
        <img src={LoadingIcon} alt="loading-icon" />
        <h5 style={{ marginTop: -40 }}>Your country even dey there?</h5>
      </div>
    </div>
  );
}

export default Loading;
