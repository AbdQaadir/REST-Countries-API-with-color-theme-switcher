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
          Fetching data
        </h5>
        <img src={LoadingIcon} alt="loading-icon" />
      </div>
    </div>
  );
}

export default Loading;
