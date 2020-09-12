import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="row" id="header">
      <div className="col-12 d-flex justify-content-between align-items-center p-3 p-sm-4">
        <h1 className="mt-2">Where in the world?</h1>
        <button className="btn">
          <i className="fas fa-moon"></i> Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
