import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
const reducers = combineReducers({
  users: usersReducer,
  products: productsReducer,
});

export { reducers };
