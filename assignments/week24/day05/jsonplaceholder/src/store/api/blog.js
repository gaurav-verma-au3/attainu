import { store } from "../../store/index";

const fetchPosts = () => {
  let url = `https://jsonplaceholder.typicode.com/posts`;
  fetch(url)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: "UPDATE_POSTS",
        payload: response
      });
    });
};

const fetchUsers = () => {
  let url = `https://jsonplaceholder.typicode.com/users`;
  fetch(url)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: "UPDATE_USERS",
        payload: response
      });
    });
};

const fetchComments = key => {
  let url = `https://jsonplaceholder.typicode.com/comments?postId=${key}`;
  fetch(url)
    .then(data => data.json())
    .then(response => {
      console.log(response.items);
      store.dispatch({
        type: "UPDATE_COMMENTS",
        payload: response
      });
    });
};

const createPost = postBody => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postBody),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data =>
      store.dispatch({
        type: "UPDATE_POST",
        payload: data
      })
    );
};

export { fetchPosts, fetchComments, fetchUsers, createPost };
