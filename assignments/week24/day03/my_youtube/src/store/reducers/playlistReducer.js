import { createPlaylist } from "../api/youtube";

const playlistReducer = (playlist = [], action) => {
  if (action.type === "CREATE_PLAYLIST") {
    createPlaylist(action.payload);
  }

  if (action.type === "PLAYLIST_CREATED") {
    playlist = action.payload;
  }
  return playlist;
};

export default playlistReducer;
