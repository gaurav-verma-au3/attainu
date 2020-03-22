

const usersReducer = (users = [], action) => {
    if (action.type === "ADD_USER") {
        users = [...users, action.payload]
    }

    if (action.type === "UPDATE_USER") {
        users = [action.payload]

    }
    return users
}



export default usersReducer