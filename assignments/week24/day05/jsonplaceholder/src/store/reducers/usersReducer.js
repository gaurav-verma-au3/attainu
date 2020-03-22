import { fetchUsers } from "../api/blog";

const usersReducer = (users = [], action) => {
  if (action.type === "FETCH_USERS") {
    fetchUsers();
  }

  if (action.type === "UPDATE_USERS") {
    users = action.payload;
  }

  return users;
};

export default usersReducer;
