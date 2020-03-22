import { combineReducers } from "redux";
import videosReducer from './videosReducer'
import commentsReducer from "./commentsReducer";
import titleReducer from "./titleReducer"

const reducers = combineReducers({
    videos: videosReducer,
    comments: commentsReducer,
    title: titleReducer
})





export { reducers}