const counterReducer = (initialState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return initialState + action.payload;
    case "DECREMENT":
      return initialState - action.payload;
    default:
      return initialState;
  }
};

export default counterReducer;
