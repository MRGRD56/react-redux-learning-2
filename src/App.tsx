import React, {useRef, useState} from 'react';
import {Button, Layout, Menu, Space, Table, Tag, Typography} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {delay} from "./utils/utils";

import "antd/dist/antd.min.css";
import './App.scss';
import {ColumnsType} from "antd/es/table";
import Text from "antd/es/typography/Text";
import Person from "./models/Person";
import {Provider, useDispatch, useStore} from "react-redux";
import {AnyAction, createStore, Reducer} from "redux";
import PersonsTable from "./components/PersonsTable";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
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

    const personsReducer: Reducer<Person[] | undefined, AnyAction> = (state, action) => {
        if (!state) return state;
        switch (action.type) {
            case "ADD_PERSON":
                return [...state, action.newPerson!];
            case "REMOVE_LAST_PERSON":
                return state.filter((p, index) => index !== state.length - 1);
            case "REMOVE_PERSON":
                return state.filter(p => p !== action.personToRemove);
            default:
                return state;
        }
    }

    const personsStoreRef = useRef(createStore(personsReducer, initialPersons));

    async function addPerson() {
        setIsLoading(true);
        await delay(500);
        personsStoreRef.current.dispatch({
            type: "ADD_PERSON",
            newPerson: {
                name: "New Person",
                age: 27,
                skills: ["Lorem", "ipsum", "dolor", "sit", "amet"]
            }
        });
        setIsLoading(false);
    }

    function removeLastPerson() {
        personsStoreRef.current.dispatch({
            type: "REMOVE_LAST_PERSON"
        });
    }

    return (
        <Provider store={personsStoreRef.current}>
            <Layout>
                <Header>
                </Header>
                <Content>
                    <Space direction="vertical">
                        <PersonsTable/>
                        <Space>
                            <Button type="primary" loading={isLoading} onClick={addPerson}>Add a person</Button>
                            <Button onClick={removeLastPerson}>Cancel</Button>
                        </Space>
                    </Space>
                </Content>
            </Layout>
        </Provider>
    );
}

export default App;
