import axios from "axios";

import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from "./types";

// Sign up user
export const registerUser = (userData) => (dispatch) => {
	// Clear previous errors
	dispatch(clearErrors());

	axios
		.post("/api/auth/signup", userData)
		.then((res) => {
			// Get the user object from response
			const { user } = res.data;

			const newUser = {
				id: user._id,
				email: user.email,
				registerOn: user.date,
			};

			dispatch(setNewUser(newUser));
		})
		.catch((err) => dispatch(errorCreator(err.response.data)));
};

// Just an action creator
export const setNewUser = (newUser) => {
	return {
		type: SET_CURRENT_USER,
		payload: newUser,
	};
};

export const errorCreator = (error) => {
	return {
		type: GET_ERRORS,
		payload: error,
	};
};

export const clearErrors = () => {
	console.log("Clear");
	return {
		type: CLEAR_ERRORS,
	};
};

// Log in user
export const loginUser = (userData) => (dispatch) => {
	// Clear previous errors
	dispatch(clearErrors());

	axios
		.post("/api/auth/login", userData)
		.then((res) => {
			// Get the user object from response
			const { user } = res.data;

			const newUser = {
				id: user._id,
				email: user.email,
				registerOn: user.data,
			};

			dispatch(setNewUser(newUser));
		})
		.catch((err) => dispatch(errorCreator(err.response.data)));
};
