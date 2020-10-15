import React from "react";
import "./style.css";

function Search(props) {
  return<form className="search">
  <input
      type="text"
      placeholder="Search Name"
      onChange={props.handleInputChange}
      />
</form>
}



export default Search;
