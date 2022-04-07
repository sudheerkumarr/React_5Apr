import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
    console.log("Inside Constructor");
  }
  state = {
    posts: [],
  };
  // life cycle methods
  componentDidMount() {
    console.log("Inside componentDidMount()");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("Inside componentDidUpdate()");
  }
  componentWillUnmount() {
    console.log("Inside componentWillUnmount()");
  }

  render() {
    console.log("Inside render() method");
    return (
      <div className="container ">
        <h1>Posts Page</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((p) => (
              <tr>
                <th scope="row">{p.userId}</th>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Update
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
