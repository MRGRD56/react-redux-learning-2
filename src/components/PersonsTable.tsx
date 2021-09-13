import React from 'react';
import {Button, Table, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Person from "../models/Person";
import {ColumnsType} from "antd/es/table";
import Text from "antd/es/typography/Text";
import {DeleteFilled} from "@ant-design/icons";
import {Dispatch} from "redux";
import AppAction from "../models/actions/AppAction";
import AppActionType from "../models/actions/AppActionType";
const PersonsTable = () => {
    const persons = useSelector<any, Person[]>(state => state.persons);
    const dispatchPersons = useDispatch<Dispatch<AppAction>>();

    function removePerson(person: Person) {
        dispatchPersons({
            type: AppActionType.removePerson,
            personToRemove: person
        });
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
        },
        {
            title: "Action",
            key: "action",
            render: (_, person: Person) => (
                <Button type="text" danger onClick={() => removePerson(person)}>
                    <DeleteFilled/>
                </Button>
            )
        }
    ];

    return (
        <Table columns={tableColumns} dataSource={persons} pagination={false}/>
    );
};

export default PersonsTable;
