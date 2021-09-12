import React from 'react';
import {Table, Tag} from "antd";
import {useSelector} from "react-redux";
import Person from "../models/Person";
import {ColumnsType} from "antd/es/table";
import Text from "antd/es/typography/Text";

const PersonsTable = () => {
    const persons = useSelector<Person[], Person[]>(state => state);

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
        <Table columns={tableColumns} dataSource={persons} pagination={false}/>
    );
};

export default PersonsTable;
