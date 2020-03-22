import {fetchComments} from '../api/youtube'


const commentsReducer = (comments = [], action) => {
    if(action.type === "FETCH_COMMENTS"){
        fetchComments(action.payload)
    }

    if(action.type === "UPDATE_COMMENTS"){
        console.log(action.payload)
        comments = action.payload
        
    }
    return comments
}



export default commentsReducer