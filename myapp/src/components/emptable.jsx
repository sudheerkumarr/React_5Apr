import React, { Component } from "react";

class EmployeeTable extends Component {
  render() {
    return (
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
          {/* {this.state.employees.map((emp) => (
            <tr>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))} */}
          {this.props.employees.map((emp) => (
            <tr>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
