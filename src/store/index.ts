import {combineReducers, createStore} from "redux";
import personsReducer from "./personsReducer";
import counterReducer from "./counterReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter: counterReducer,
    persons: personsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
export type RootReducer = typeof rootReducer;
