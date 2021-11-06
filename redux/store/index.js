import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { reducer } from "../reducers";

export const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
