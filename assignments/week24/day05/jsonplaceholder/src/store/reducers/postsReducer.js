import { fetchPosts, createPost } from "../api/blog";
const postsReducer = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    fetchPosts();
  }

  if (action.type === "UPDATE_POSTS") {
    posts = action.payload;
  }

  if (action.type === "CREATE_POST") {
    createPost(action.payload);
  }

  if (action.type === "UPDATE_POST") {
    posts = [action.payload, ...posts];
  }
  return posts;
};

export default postsReducer;
