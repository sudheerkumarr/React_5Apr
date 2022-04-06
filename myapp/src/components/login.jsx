// Functional component
// imr  - import React from react module
// sfc  - create stateless functional component
import React from "react";

const Login = () => {
  return (
    <div className="mx-auto w-50 border px-3 pb-3 ">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" class="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
