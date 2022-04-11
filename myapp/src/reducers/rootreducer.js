import counterReducer from "./counterreducer";
import { combineReducers } from "redux";
import productReducer from "./productreducer";

const rootReducer = combineReducers({
  count: counterReducer,
  products: productReducer,
});

export default rootReducer;
