import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const middleware = [thunk];
const initialState = {};

// eslint-disable-next-line no-underscore-dangle
const devTools = process.env.NODE_ENV === "production"
  ? compose(applyMiddleware(...middleware))
  : compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
          && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

const store = createStore(rootReducer, initialState, devTools);

export default store;
