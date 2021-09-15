import {Dispatch} from "redux";
import AppAction from "../../models/actions/AppAction";
import AppActionType from "../../models/actions/AppActionType";
import JsonPlaceholder from "../../services/JsonPlaceholder";

export default function fetchPersons() {
    return async function (dispatch: Dispatch<AppAction>) {
        const persons = await JsonPlaceholder.getPersons();
        dispatch({
            type: AppActionType.addPersons,
            newPersons: persons
        });
    }
}