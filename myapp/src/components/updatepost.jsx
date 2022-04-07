import React, { Component } from "react";
import axios from "axios";

class UpdatePost extends Component {
  state = {
    post: {
      userId: "",
      id: "",
      title: "",
      body: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({ post: res.data });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    console.log("handle change");
    console.log(event.target.name); // field name
    console.log(event.target.value); // field value
    // create local variable and copy state post object value
    const newPost = { ...this.state.post };
    //post.userId = 123;
    //post[userId] = 123;

    // capture user input
    newPost[event.target.name] = event.target.value;
    // Update state object
    this.setState({ post: newPost });
  };
  handleSubmit = (event) => {
    console.log("handle submit");
    event.preventDefault();
    // Send post request
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.post)
      .then((res) => {
        console.log(res);
        alert("Post added successfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container mt-3">
        <form className="border p-3 w-75 mx-auto" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlfor="userId" className="form-label">
              User Id
            </label>
            <input
              type="number"
              className="form-control"
              id="userId"
              placeholder="Enter user id"
              value={this.state.post.userId}
              name="userId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlfor="id" className="form-label">
              Id
            </label>
            <input
              type="number"
              value={this.state.post.id}
              name="id"
              onChange={this.handleChange}
              placeholder="Enter post id"
              className="form-control"
              id="id"
            />
          </div>
          <div className="mb-3">
            <label htmlfor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={this.state.post.title}
              name="title"
              onChange={this.handleChange}
              placeholder="Enter post title"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlfor="body" className="form-label">
              Body
            </label>
            <input
              type="text"
              value={this.state.post.body}
              name="body"
              onChange={this.handleChange}
              placeholder="Enter post body"
              className="form-control"
              id="body"
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdatePost;
