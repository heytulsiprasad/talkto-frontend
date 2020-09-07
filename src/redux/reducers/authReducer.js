import _ from "lodash";
import { SET_CURRENT_USER } from "./../actions/types";

const initialState = {
	isAuthenticated: false,
	user: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !_.isEmpty(action.payload),
				user: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
