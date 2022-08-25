import * as ActionTypes from "../ActionTypes";

const initVal = {
  error: "",
};
export const authReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.PASS_ERROR:
      return {
        // ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
