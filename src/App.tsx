import React, {useState} from 'react';
import {Button, Layout, Menu, Space, Table, Tag, Typography} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {delay} from "./utils/utils";

import "antd/dist/antd.min.css";
import './App.scss';
import {ColumnsType} from "antd/es/table";
import Text from "antd/es/typography/Text";
import Person from "./models/Person";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [persons, setPersons] = useState<Person[]>([
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
    ]);


    async function startLoading() {
        setIsLoading(true);
        await delay(3000);
        setIsLoading(false);
    }

    const tableColumns: ColumnsType<any> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            render: (age: number) => {
                return (
                    <Text type={age >= 18 ? undefined : "danger"}>{age}</Text>
                )
            }
        },
        {
            title: "Skills",
            dataIndex: "skills",
            key: "skills",
            render: (skills: string[]) => {
                return skills.map((skill: string) => (
                    <Tag>{skill}</Tag>
                ));
            }
        }
    ];

    return (
        <Layout>
            <Header>
            </Header>
            <Content>
                <Space direction="vertical">
                    <Table columns={tableColumns} dataSource={persons} pagination={false}>

                    </Table>
                    <Space>
                        <Button type="primary" loading={isLoading} onClick={startLoading}>Apply</Button>
                        <Button>Cancel</Button>
                    </Space>
                </Space>
            </Content>
        </Layout>
    );
}

export default App;
