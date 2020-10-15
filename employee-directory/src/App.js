import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Search from "./components/Search";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  handleInputChange = event => {
    const searchText = event.target.value
    console.log(searchText)
    const employees = this.state.employees.filter(employee => {
      if (employee.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    });
    console.log(employees)
    this.setState({ employees })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search
          handleInputChange={this.handleInputChange} />
        <Header></Header>
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
