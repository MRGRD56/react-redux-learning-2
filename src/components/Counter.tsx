import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Space} from "antd";
import Text from "antd/es/typography/Text";
import ButtonGroup from "antd/es/button/button-group";
import {Dispatch} from "redux";
import AppAction from "../models/actions/AppAction";
import AppActionType from "../models/actions/AppActionType";

const Counter: FC = () => {
    const dispatch = useDispatch<Dispatch<AppAction>>();
    const value = useSelector<any, number>(state => state.counter.value);

    function incrementValue(increment: number) {
        dispatch({
            type: AppActionType.incrementCounter,
            incrementValue: increment
        });
    }

    function resetValue() {
        dispatch({
            type: AppActionType.resetCounter
        });
    }

    return (
        <Space>
            <Text>{value}</Text>
            <ButtonGroup>
                <Button onClick={() => incrementValue(1)}>+1</Button>
                <Button onClick={() => incrementValue(-1)}>-1</Button>
            </ButtonGroup>
            <Button onClick={() => resetValue()}>Reset</Button>
        </Space>
    );
};

export default Counter;