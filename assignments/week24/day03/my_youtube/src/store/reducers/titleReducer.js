const titleReducer = (title = "", action) => {
  if (action.type === "Create Playlist") {
    title = action.type;
  }

  if (action.type === "Trending Videos") {
    title = action.type;
  }

  if (action.type === "Search Videos") {
    title = action.type;
  }

  if (action.type === "PLAY_VIDEO") {
    title = action.payload;
  }
  return title;
};

export default titleReducer;
