import axios from "axios";
import User from "../../models/jsonplaceholder/User";
import Person from "../../models/Person";
import {Dispatch} from "redux";
import AppAction from "../../models/actions/AppAction";
import AppActionType from "../../models/actions/AppActionType";

export default function fetchPersons() {
    return async function (dispatch: Dispatch<AppAction>) {
        const users = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        const persons: Person[] = users.data.map(user => {
            return {
                name: user.name,
                age: Math.round(Math.random() * 100),
                skills: user.company.name.split(" ")
            }
        });
        dispatch({
            type: AppActionType.addPersons,
            newPersons: persons
        });
    }
}