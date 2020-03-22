import {fetchTrending, fetchSearch  } from '../api/youtube'
 import {store} from '../../store'

const videosReducer = (videos = [], action) => {
    if(action.type=== "FETCH_TRENDING"){
fetchTrending(store)
    }
    if(action.type === "UPDATE_TRENDING"){
        videos = action.payload
    }
    if(action.type === "EMPTY_VIDEOS"){
        videos = []
    }
    if(action.type === "SEARCH_VIDEOS"){
        console.log(action.payload)
        fetchSearch(action.payload)
    }
    return videos
}



export default videosReducer