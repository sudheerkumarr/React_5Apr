//React Hook Methods
import { fromByteArray } from "joi-browser";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counteractions";

const Counter = () => {
  // state={
  //     count:0
  // }
  // setState({})
  // this.state.count

  // defines state
  //const [count, setCount] = useState(0);

  // Get count value from store
  const count = useSelector((state) => state.count);
  console.log(count);

  // dispatch an action
  const dispatch = useDispatch();

  //componentDidMount() & componentDidUpdate()
  // executes at the time of page loading and when there is a change in state
  /*useEffect(() => {
    console.log("useEffect");
  }, [count]);

  // Function to increment count value by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count value by 1
  const decrement = () => {
    setCount(count - 1);
  };

  */
  return (
    <div>
      <button
        className="btn btn-primary me-3"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {count}
      <button
        className="btn btn-secondary ms-3"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
