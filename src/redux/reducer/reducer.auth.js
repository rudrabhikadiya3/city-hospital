import * as Actiontypes from "../ActionTypes";
const initVal = {
  isError: false,
  isLoading: false,
  data: null,
};
export const authReducer = (state = initVal, action) => {
  switch (action.type) {
    case Actiontypes.LOGGED_IN:
      return {
        ...state,
        data: action.payload,
        isError: false,
        isLoading: false,
      };
    case Actiontypes.LOGGED_OUT:
      return {
        ...state,
        data: null,
        isError: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
