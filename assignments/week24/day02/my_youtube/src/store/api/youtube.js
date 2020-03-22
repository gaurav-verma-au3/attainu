import { YOUTUBE_API_KEY } from "../../config";
import { store } from "../../store";

const fetchTrending = store => {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${YOUTUBE_API_KEY}&chart=mostPopular&maxResults=20`;
  fetch(url)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: "UPDATE_TRENDING",
        payload: response.items
      });
    });
};

const fetchComments = videoId => {
  let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${YOUTUBE_API_KEY}`;
  fetch(url)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: "UPDATE_COMMENTS",
        payload: response.items
      });
    });
};

const fetchSearch = key => {
  let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${key}&part=snippet&type=video`;
  console.log(url);
  fetch(url)
    .then(data => data.json())
    .then(response => {
      console.log(response.items);
      store.dispatch({
        type: "UPDATE_TRENDING",
        payload: response.items
      });
    });
};

const gettoken = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return user.accessToken;
};

function createPlaylist(formData) {
  let url = "https://www.googleapis.com/youtube/v3/playlists?part=snippet";
  let token = gettoken();
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(data => data.json())
    .then(res => {
      store.dispatch({
        type: "PLAYLIST_CREATED",
        payload: res
      });
    });
}

export { fetchTrending, fetchComments, fetchSearch, createPlaylist };
