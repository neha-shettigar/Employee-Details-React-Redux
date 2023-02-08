import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";

// createStore creates a Redux store that holds the state tree.
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)