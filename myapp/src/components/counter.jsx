//React Hook Methods
import React, { useEffect, useState } from "react";

const Counter = () => {
  // state={
  //     count:0
  // }
  // setState({})
  // this.state.count

  // defines state
  const [count, setCount] = useState(0);

  //componentDidMount() & componentDidUpdate()
  // executes at the time of page loading and when there is a change in state
  useEffect(() => {
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

  return (
    <div>
      <button className="btn btn-primary me-3" onClick={decrement}>
        Decrement
      </button>
      {count}
      <button className="btn btn-secondary ms-3" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
