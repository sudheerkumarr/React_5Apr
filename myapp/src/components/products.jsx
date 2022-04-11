import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllProductsAction } from "../actions/productactions";
import { connect } from "react-redux";

class Products extends Component {
  state = {
    products: [],
  };
  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    // Dispatch action to get all products
    this.props.getAllProductsAction();
  }
  render() {
    console.log(this.props.products);
    return (
      <div>
        <h1>Products Page</h1>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-2 col-xs-12">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    count: state.products,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProductsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Products);
