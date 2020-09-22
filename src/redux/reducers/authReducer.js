import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  SET_AUTH_STATE,
} from "../actions/types";
import isEmpty from "../../utils/isEmpty";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case SET_AUTH_STATE:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
