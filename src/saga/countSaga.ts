import {put, takeEvery} from "redux-saga/effects";
import {delay} from "../utils/utils";
import {incrementCounterAction} from "../store/counterReducer";
import AppActionType from "../models/actions/AppActionType";

function* incrementWorker() {
    yield delay(1000);
    yield put(incrementCounterAction(1));
}

function* decrementWorker() {
    yield delay(1000);
    yield put(incrementCounterAction(-1));
}

export function* countWatcher() {
    yield takeEvery(AppActionType.asyncIncrementCounter, incrementWorker);
    yield takeEvery(AppActionType.asyncDecrementCounter, decrementWorker);
}