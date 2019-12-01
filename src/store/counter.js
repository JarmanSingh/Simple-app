const INCREMENT_COUNTER = "counter/INCREMENT";
const DECREMENT_COUNTER = "counter/DECREASE";

export function increaseCounter() {
  return { type: INCREMENT_COUNTER };
}

export function decreaseCounter() {
  return { type: DECREMENT_COUNTER };
}

function counterReducer(state = { count: 2 }, action) {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
