
const initialState = {
    currentScore: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_BONUS") {
        return {
            ...state, currentScore: state.currentScore + action.value
        }
    }
    if (action.type === "LEVEL_COMPLETED") {
        return {
            ...state, currentScore: state.currentScore + action.value
        }
    }
    if (action.type === "LIFE_LOST") {
        return {
            ...state, currentScore: state.currentScore - action.value
        }
    }
    return state
}

export default reducer;