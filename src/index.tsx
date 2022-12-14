import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import * as serviceWorker from "./serviceWorkerRegistration";
import "tachyons";

import App from "./containers/App";
import { requestRobots, searchRobots } from "./reducers";

import "./index.css";

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
serviceWorker.register();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
