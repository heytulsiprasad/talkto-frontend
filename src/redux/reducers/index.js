import { combineReducers } from "redux";

import errorReducer from "./../reducers/errorReducer";
import authReducer from "./../reducers/authReducer";

export default combineReducers({
	errors: errorReducer,
	auth: authReducer,
});
