import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
          <p>{props.name}</p>
          <p>{props.department}</p>
          <p>{props.email}</p>
          <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
