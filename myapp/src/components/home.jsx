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
        <h1>Home Page</h1>
        <h2>{this.state.counter}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{this.state.employee.empId}</td>
              <td>{this.state.employee.name}</td>
              <td>{this.state.employee.age}</td>
            </tr> */}
            {this.state.employees.map((emp) => (
              <tr>
                <td>{emp.empId}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
