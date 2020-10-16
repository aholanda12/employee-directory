import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="titles">
          <p>Image</p>
          <p>Name <i className="arrow down" onClick={props.sortUsers}></i></p>
          <p>Department <i className="arrow down"></i></p>
          <p>Email <i className="arrow down"></i></p>
          <p>Phone <i className="arrow down"></i></p>
      </div>
    </div>
  );
}

export default Header;
