import React from "react";
import "./style.css";

class Search extends React.Component {

  state = {
      searchTerm: "",
      filteredEmployees: []
  };

  componentDidMount() {
      if (this.state.filteredEmployees.length < 1) {
          this.setState({
              filteredEmployees: this.props.employees
          })
      }
  }


  handleInputChange = event => {
      this.setState({
          searchTerm: event.target.value
      });
      let userTyped = event.target.value;
      console.log(userTyped)
      const filteredList = this.props.employees.filter((item) => {
          let values = item.name + item.department + item.name.last + item.gender + item.dob.age + item.email + item.cell;
          return values.indexOf(userTyped) !== -1;

      });

      this.setState({
          filteredEmployees: filteredList

      });
  }

  render() {
      return (
          <div>
              {/* {this.fillList} */}
              <form className="form">
                  <input
                      value={this.state.searchTerm}
                      className="search"
                      onChange={event => this.handleInputChange(event)}
                      type="text"
                      placeholder="Search"
                  />
              </form>
          </div>

      );
  }
}


export default Search;

// function Search(event) {
//   return<form className="search">
//   <input
//       type="text"
//       placeholder="Search Name"
//       onChange={handleSearch(event)}
//       />
// </form>
// }



// export default Search;
