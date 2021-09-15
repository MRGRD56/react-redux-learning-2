import {applyMiddleware, combineReducers, createStore} from "redux";
import personsReducer from "./personsReducer";
import counterReducer from "./counterReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../saga";

const rootReducer = combineReducers({
    counter: counterReducer,
    persons: personsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);

export default store;
export type RootReducer = typeof rootReducer;
