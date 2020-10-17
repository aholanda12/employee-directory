import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
import employees from "./employees.json";

// comment
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  handleInputChange = event => {
    const searchText = event.target.value
    if (searchText) {
      const filteredEmployees = this.state.employees.filter(employee => employee.name.toLowerCase().includes(searchText.toLowerCase()))
      this.setState({ employees: filteredEmployees })
    }
    else { this.setState({ employees }) }
  }

  sortUsers = event => {
    const orderedList = this.state.employees
    if (orderedList[0].name.charAt(0).toLowerCase() === "a") {
      orderedList.sort(function (a, b) {
        if (a.name > b.name) { return -1; }
        if (a.name < b.name) { return 1; }
        return 0;
      })
    }
    else {
      orderedList.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    }
    this.setState({ employees: orderedList })
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search
          handleInputChange={this.handleInputChange} />
        <Header 
        sortUsers={this.sortUsers} />
        {this.state.employees.map(emp => (
          <EmployeeCard
            id={emp.id}
            key={emp.id}
            name={emp.name}
            image={emp.image}
            department={emp.department}
            email={emp.email}
            phone={emp.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
