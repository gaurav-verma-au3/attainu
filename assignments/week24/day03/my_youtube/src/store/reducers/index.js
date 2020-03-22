import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import commentsReducer from "./commentsReducer";
import titleReducer from "./titleReducer";
import playlistReducer from "./playlistReducer";
const reducers = combineReducers({
  videos: videosReducer,
  comments: commentsReducer,
  title: titleReducer,
  playlist: playlistReducer
});

export { reducers };
