import { fetchComments } from "../api/blog";

const commentsReducer = (comments = [], action) => {
  if (action.type === "FETCH_COMMENTS") {
    fetchComments(action.payload);
  }

  if (action.type === "UPDATE_COMMENTS") {
    comments = action.payload;
  }
  return comments;
};

export default commentsReducer;
