import React, { Component } from "react";
import { getProductByIdAction } from "../actions/productactions";
import { connect } from "react-redux";

class ProductDetails extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    this.props.getProductByIdAction(this.props.match.params.productId);
    setTimeout(() => {
      this.setState({ product: this.props.product });
    }, 2000);
  }
  render() {
    console.log(this.state.product);
    return (
      <div className="mt-3">
        <div className="row">
          <div className="col-lg-4">
            <img height="250" src={this.state.product.image} />
            <br />
            <button className="btn btn-primary">Add to cart</button>
            <button className="btn btn-secondary">Buy now</button>
          </div>
          <div className="col-lg-8 text-start">
            <h5>{this.state.product.title}</h5>
            <h6>Price: {this.state.product.price}</h6>
            <p>Description: {this.state.product.description}</p>
            <small>Category: {this.state.product.category}</small>
          </div>
        </div>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    product: state.fakeStore.product,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getProductByIdAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductDetails);
