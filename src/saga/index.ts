import {all} from "redux-saga/effects";
import {countWatcher} from "./countSaga";
import {personsWatcher} from "./personsSaga";

export function* rootWatcher() {
    yield all([countWatcher(), personsWatcher()]);
}