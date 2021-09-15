import {Reducer} from "redux";
import Counter from "../models/Counter";
import AppAction from "../models/actions/AppAction";
import AppActionType from "../models/actions/AppActionType";

const initialState: Counter = {
    value: 54.29
}

const counterReducer: Reducer<Counter | undefined, AppAction> = (state, action) => {
    if (!state) return initialState;
    switch (action.type) {
        case AppActionType.incrementCounter:
            return {...state, value: state.value + action.incrementValue!}
        case AppActionType.resetCounter:
            return initialState;
        default:
            return state;
    }
};

export default counterReducer;

export function incrementCounterAction(incrementValue: number): AppAction {
    return {
        type: AppActionType.incrementCounter,
        incrementValue
    }
}

export function asyncIncrementCounterAction(): AppAction {
    return {
        type: AppActionType.asyncIncrementCounter
    }
}

export function asyncDecrementCounterAction(): AppAction {
    return {
        type: AppActionType.asyncDecrementCounter
    }
}

export function resetCounterAction(): AppAction {
    return {
        type: AppActionType.resetCounter
    }
}