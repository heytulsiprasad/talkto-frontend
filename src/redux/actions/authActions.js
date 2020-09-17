import axios from "axios";

import { SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS } from "./types";

export const setCurrentUser = (newUser) => ({
  type: SET_CURRENT_USER,
  payload: newUser,
});

export const errorCreator = (error) => ({
  type: GET_ERRORS,
  payload: error,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

// Sign up user
export const registerUser = (userData) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post("/auth/signup", userData)
    .then((res) => {
      // Get the user object from response
      const { user } = res.data;

      const newUser = {
        id: user._id,
        email: user.email,
        registerOn: user.date,
      };

      dispatch(setCurrentUser(newUser));
    })
    .catch((err) => dispatch(errorCreator(err.response.data)));
};

// Log in user
export const loginUser = (userData) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post("/auth/login", userData)
    .then((res) => {
      // Get the user object from response
      const { user } = res.data;

      const newUser = {
        id: user._id,
        email: user.email,
        registerOn: user.data,
      };

      dispatch(setCurrentUser(newUser));
    })
    .catch((err) => dispatch(errorCreator(err.response.data)));
};

// Get user profile
export const getUserProfile = () => (dispatch) => {
  axios
    .get("/profile", { withCredentials: true })
    .then((res) => {
      const { name, bio, phone, local, google, facebook } = res.data;

      const user = {
        name,
        bio,
        phone,
        local: local[0],
        google: google[0],
        facebook: facebook[0],
      };

      dispatch(setCurrentUser(user));
    })
    .catch((err) => {
      throw new Error(err);
    });
};
