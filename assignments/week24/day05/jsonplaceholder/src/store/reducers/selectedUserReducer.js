const selectedUserReducer = (selectedUser = ["all"], action) => {
  if (action.type === "UPDATE_SELECTED_USER") {
    selectedUser = [action.payload];
  }
  if (action.type === "UPDATE_SELECTED_USER_TO_ALL") {
    selectedUser = ["all"];
  }
  return selectedUser;
};

export default selectedUserReducer;
