import axios from "axios";

import {
  SET_CURRENT_USER,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_CURRENT_USER,
  SET_AUTH_STATE,
} from "./types";

const backendURL =
  process.env.NODE_ENV === "production"
    ? "https://talk-to-network.herokuapp.com"
    : "http://localhost:5000";

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
export const registerUser = (userData, history) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post(`${backendURL}/auth/signup`, userData, {
      withCredentials: true,
    })
    .then((res) => {
      const {
        name,
        bio,
        phone,
        local,
        google,
        facebook,
        email,
        image,
      } = res.data.user;

      const user = {
        name,
        email,
        bio,
        phone,
        image,
        local: local[0],
        google: google[0],
        facebook: facebook[0],
      };

      dispatch(setCurrentUser(user));
      history.push("/");
    })
    .catch((err) => {
      dispatch(errorCreator(err.response.data));
    });
};

// Log in user
export const loginUser = (userData, history) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post(`${backendURL}/auth/login`, userData, {
      withCredentials: true,
    })
    .then((res) => {
      const {
        name,
        bio,
        phone,
        local,
        google,
        facebook,
        email,
        image,
      } = res.data.user;

      const user = {
        name,
        email,
        bio,
        phone,
        image,
        local: local[0],
        google: google[0],
        facebook: facebook[0],
      };

      dispatch(setCurrentUser(user));
      history.push("/");
    })
    .catch((err) => {
      dispatch(errorCreator(err.response.data));
    });
};

// Get user profile
export const fetchUserProfile = (callback) => (dispatch) => {
  axios
    .get(`${backendURL}/profile`, { withCredentials: true })
    .then((res) => {
      const {
        name,
        bio,
        phone,
        local,
        google,
        facebook,
        email,
        image,
      } = res.data;

      const user = {
        name,
        email,
        bio,
        phone,
        image,
        local: local[0],
        google: google[0],
        facebook: facebook[0],
      };

      dispatch(setCurrentUser(user));
      callback();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Edit user profile
export const editUserProfile = (userdata, history) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post(`${backendURL}/profile/edit`, userdata, {
      withCredentials: true,
    })
    .then(() => history.push("/"))
    .catch((err) => {
      // console.dir(err);
      dispatch(errorCreator(err.response.data));
    });
};

export const logoutUser = (history) => (dispatch) => {
  axios
    .get(`${backendURL}/auth/logout`, { withCredentials: true })
    .then(() => {
      dispatch({ type: CLEAR_CURRENT_USER });
      history.push("/login");
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const deleteUser = (history) => (dispatch) => {
  axios
    .delete(`${backendURL}/profile/delete`, { withCredentials: true })
    .then(() => {
      dispatch({ type: CLEAR_CURRENT_USER });
      history.push("/login");
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const setAuthState = (isAuth) => (dispatch) => {
  dispatch({ type: SET_AUTH_STATE, payload: isAuth });
};
