import axios from "axios";

import {
  SET_CURRENT_USER,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_CURRENT_USER,
} from "./types";

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
    .post("/auth/signup", userData)
    .then(() => {
      console.log(history);
      history.push("/");
    })
    .catch((err) => {
      dispatch(errorCreator(err.response.data));
    });
  // .then((res) => {
  //   // Get the user object from response
  //   const { user } = res.data;

  //   const newUser = {
  //     id: user._id,
  //     email: user.email,
  //     registerOn: user.date,
  //   };

  //   dispatch(setCurrentUser(newUser));
  // })
  // .catch((err) => {
  //   console.dir(err);
  //   return dispatch(errorCreator(err.response.data));
  // });
};

// Log in user
export const loginUser = (userData, history) => (dispatch) => {
  // Clear previous errors
  dispatch(clearErrors());

  axios
    .post("/auth/login", userData)
    .then(() => {
      history.push("/");
    })
    .catch((err) => {
      dispatch(errorCreator(err.response.data));
    });

  // axios
  //   .post("/auth/login", userData)
  //   .then((res) => {
  //     // Get the user object from response
  //     const { user } = res.data;

  //     const newUser = {
  //       id: user._id,
  //       email: user.email,
  //       registerOn: user.data,
  //     };

  //     dispatch(setCurrentUser(newUser));
  //   })
  //   .catch((err) => dispatch(errorCreator(err.response.data)));
};

// Get user profile
export const fetchUserProfile = () => (dispatch) => {
  axios
    .get("/auth/profile", { withCredentials: true })
    .then((res) => {
      const {
        name, bio, phone, local, google, facebook,
      } = res.data;

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

// Logout user

export const logoutUser = (history) => (dispatch) => {
  axios
    .get("/auth/logout", { withCredentials: true })
    .then(() => {
      dispatch({ type: CLEAR_CURRENT_USER });
      history.push("/login");
    })
    .catch((err) => {
      throw new Error(err);
    });
};
