import {Action} from "redux";
import Person from "../Person";
import AppActionType from "./AppActionType";

export default interface AppAction extends Action<AppActionType> {
    incrementValue?: number;
    newPerson?: Person,
    personToRemove?: Person
}
