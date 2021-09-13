import {Reducer} from "redux";
import Person from "../models/Person";
import AppAction from "../models/actions/AppAction";
import AppActionType from "../models/actions/AppActionType";

const initialPersons = [
    {
        name: "Ivanov Ivan",
        age: 31,
        skills: ["C#", "TypeScript"]
    },
    {
        name: "Amari Shaw",
        age: 17,
        skills: ["HTML", "CSS"]
    },
    {
        name: "Nicholas Lane",
        age: 54,
        skills: ["JavaScript", "React", "Redux"]
    }
];

const personsReducer: Reducer<Person[] | undefined, AppAction> = (state, action) => {
    if (!state) return initialPersons;
    switch (action.type) {
        case AppActionType.addPerson:
            return [...state, action.newPerson!];
        case AppActionType.removeLastPerson:
            return state.filter((p, index) => index !== state.length - 1);
        case AppActionType.removePerson:
            return state.filter(p => p !== action.personToRemove!);
        default:
            return state;
    }
}

export default personsReducer;