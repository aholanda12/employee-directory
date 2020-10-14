import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="titles">
          <p>Image</p>
          <p>Name <i class="arrow down"></i></p>
          <p>Department <i class="arrow down"></i></p>
          <p>Email <i class="arrow down"></i></p>
          <p>Phone <i class="arrow down"></i></p>
      </div>
    </div>
  );
}

export default Header;
