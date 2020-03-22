import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";
import usersReducer from "./usersReducer";
import selectedUserReducer from "./selectedUserReducer";


const reducers = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer,
  selectedUser: selectedUserReducer

});

export { reducers };
