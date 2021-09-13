import React, {useState} from 'react';
import {Button, Layout, Space} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {delay} from "./utils/utils";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import PersonsTable from "./components/PersonsTable";
import AppAction from "./models/actions/AppAction";
import AppActionType from "./models/actions/AppActionType";

import "antd/dist/antd.min.css";
import "./App.scss";
import Counter from "./components/Counter";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch<Dispatch<AppAction>>();

    async function addPerson() {
        setIsLoading(true);
        await delay(500);
        dispatch({
            type: AppActionType.addPerson,
            newPerson: {
                name: "New Person",
                age: 29,
                skills: ["Lorem", "ipsum", "dolor", "sit", "amet"]
            }
        });
        setIsLoading(false);
    }

    function removeLastPerson() {
        dispatch({
            type: AppActionType.removeLastPerson
        });
    }

    return (
        <Layout>
            <Header>
            </Header>
            <Content>
                <Space direction="vertical">
                    <Counter/>
                    <PersonsTable/>
                    <Space>
                        <Button type="primary" loading={isLoading} onClick={addPerson}>Add a person</Button>
                        <Button onClick={removeLastPerson}>Cancel</Button>
                    </Space>
                </Space>
            </Content>
        </Layout>
    );
}

export default App;
