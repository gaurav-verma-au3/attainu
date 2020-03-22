import questions from "./questions";

const initialState = {
  questions: questions,

  counter: 0,

  answers: []
};

const reducer = (state = initialState, action) => {
  if (action.type === "JUMP_TO_FIRST") {
    return {
      ...state,
      counter: 0
    };
  }
  if (action.type === "JUMP_TO_LAST") {
    return {
      ...state,
      counter: state.questions.length - 1
    };
  }
  if (action.type === "PREV") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  if (action.type === "NEXT") {
    return {
      ...state,

      counter: state.counter + 1
    };
  }
  if (action.type === "JUMP_TO_QUESTION") {
    console.log(action.index);
    return {
      ...state,

      counter: action.index
    };
  }
  if (action.type === "UPDATE_ANSWER") {
    let newAnswers = [...state.answers];
    newAnswers[action.index] = action.answer;
    return {
      ...state,
      answers: newAnswers
    };
  }
  return state;
};

export default reducer;
