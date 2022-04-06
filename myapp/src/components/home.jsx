/*
Components:
 types
 class component
 functional component
 imrc - import React & Component
 imr - import React
 cc - create class component
 ccc - create class component with constructor
 sfc - stateless functional component
*/
import React, { Component } from "react";
import EmployeeTable from "./emptable";

class Home extends Component {
  state = {
    counter: 0,
    employee: {
      empId: 1001,
      name: "Raj",
      age: 23,
    },
    employees: [
      { empId: 1001, name: "Raj", age: 23 },
      { empId: 1002, name: "Raja", age: 22 },
      { empId: 1003, name: "Ravi", age: 24 },
      { empId: 1004, name: "Sam", age: 24 },
    ],
  };
  render() {
    return (
      <div className="container">
        <EmployeeTable
          employees={this.state.employees}
          emp={this.state.employee}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default Home;
