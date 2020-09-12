import React from "react";

import "./Header.css";

function Header({ mode, setMode }) {
  return (
    <div className={mode ? "row dark" : "row light"} id="header">
      <div className="col-12 d-flex justify-content-between align-items-center p-3 p-sm-4">
        <h1 className="mt-2">Where in the world?</h1>
        <button className="btn" onClick={() => setMode(!mode)}>
          <i className={mode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
