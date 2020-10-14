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

  handleSearch = event => {
    console.log(event)
    // // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  componentDidMount() {
        this.setState({ employees });
      };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search></Search>
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
