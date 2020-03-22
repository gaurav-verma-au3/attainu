
const initialState = {
    counter: 0,
    todos: [],
    refresh: true,
    toRender: []
};





const reducers = (state = initialState, action) => {
    let add = (arr, val) => {
        arr.push({
            id: state.counter + 1,
            name: val,
            isDone: false
        })
        return arr
    }
    const markDone = (arr, index) => {

        arr[index].isDone = true
        return arr

    }
    const remove = (arr, index) => {
        arr.splice(index, 1)
        return arr
    }
    // const filterPending = (arr) => {

    //     arr.filter((item, index) => item.isDone === true)
    // }

    if (action.type === "ADD") {
        console.log(action.payload)
        return {
            ...state,
            todos: add(state.todos, action.payload),
            counter: state.counter + 1,
            refresh: !state.refresh,
            toRender: state.todos
        };
    }
    if (action.type === "MARK_DONE") {
        return {
            ...state,
            todos: markDone(state.todos, action.payload.target.value),
            refresh: !state.refresh,
            toRender: state.todos

        };
    }
    if (action.type === "DELETE") {
        return {
            ...state,
            todos: remove(state.todos, action.payload.target.value),
            refresh: !state.refresh,
            toRender: state.todos

        };
    }

    if (action.type === "SHOW_ALL") {

        return {
            ...state,
            toRender: state.todos,
            refresh: !state.refresh
        }
    }

    if (action.type === "SHOW_PENDING") {
        return {
            ...state,
            toRender: state.todos.filter((val) => val.isDone !== true),
            refresh: !state.refresh

        }

    }
    if (action.type === "SHOW_COMPLETED") {
        return {
            ...state,
            toRender: state.todos.filter((val) => val.isDone === true),
            refresh: !state.refresh
        }
    }

    return state;

};

export default reducers;