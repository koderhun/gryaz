import { INCREMENT, DECREASE } from "../../actions/count";
const initialState = {};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREASE:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
