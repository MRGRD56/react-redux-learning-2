import {put, call, takeEvery} from "redux-saga/effects";
import JsonPlaceholder from "../services/JsonPlaceholder";
import AppActionType from "../models/actions/AppActionType";

function* fetchPersonsWorker(): Generator<any, void, boolean> {
    const persons = yield call(JsonPlaceholder.getPersons);
    yield put({
        type: AppActionType.addPersons,
        newPersons: persons
    });
}

export function* personsWatcher() {
    yield takeEvery(AppActionType.asyncAddPersons, fetchPersonsWorker);
}