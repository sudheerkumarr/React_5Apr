// Functional component
// imr  - import React from react module
// sfc  - create stateless functional component
import React, { Component } from "react";
import Joi from "joi-browser";
import axios from "axios";

class Login extends Component {
  state = {
    login: {
      email: "",
      password: "",
    },
    errors: {},
    error: "",
  };
  //Step1:  Define schema to validate email and password
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(3).max(12).required(),
  };
  // Step 2: Validate
  validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(this.state.login, this.schema, {
      abortEarly: false,
    });
    // const result = Joi.validate(this.state.login, this.schema);
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    console.log("handle change");
    console.log(event.target.name); // field name
    console.log(event.target.value); // field value
    // create local variable and copy state post object value
    const newLogin = { ...this.state.login };

    // capture user input
    newLogin[event.target.name] = event.target.value;
    // Update state object
    this.setState({ login: newLogin });
  };
  handleSubmit = (event) => {
    console.log("handle submit");
    event.preventDefault();

    // validate login details with schema
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;

    // Send login request
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.login)
      .then((res) => {
        console.log(res);
        alert("Post added successfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object destructuring
    const { email, password } = this.state.login;
    return (
      <div className="mx-auto w-50 border px-3 pb-3 ">
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <label htmlfor="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={this.handleChange}
              novalidate
            />
            {this.state.errors && <small>{this.state.errors.email}</small>}
          </div>
          <div class="mb-3">
            <label htmlfor="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {this.state.errors && <small>{this.state.errors.password}</small>}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
