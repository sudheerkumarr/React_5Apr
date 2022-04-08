import React, { Component } from "react";
import Counter from "./counter";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>1</td>
              <td>Product1</td>
              <td>
                <Counter />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Product2</td>
              <td>
                <Counter />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
