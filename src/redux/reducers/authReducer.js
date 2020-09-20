import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../actions/types";

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;
