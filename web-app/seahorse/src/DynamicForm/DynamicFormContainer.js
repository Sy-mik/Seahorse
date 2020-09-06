import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormComponent from "./DynamicFormComponent";
import { authServiceLogOut } from "../services/AuthService";
import axios from 'axios';

export default function DynamicFormContainer() {
    const [state, setState] = useState([]);

    function logOut() {
        authServiceLogOut();
    }

    function addItem(itemType) {
        const uuid = uuidv4();
        var item = {
            id: uuid,
            actionType: itemType,
        };
        var joined = [...state, item];
        setState([...joined]);
    }

    function getStuff() {
        // GET request for remote image in node.js
        axios({
            method: 'get',
            url: 'http://bit.ly/2mTM3nY',
            responseType: 'stream'
        })
            .then(function (response) {
                console.log(response);
            });

    }

    return (
        <>
            <button onClick={getStuff}>get stuff</button>
            <nav>
                <button onClick={logOut}>LogOut</button>
            </nav>
            <DynamicFormComponent
                state={state}
                setState={setState}
                addItem={addItem}
            ></DynamicFormComponent>
        </>
    );
}
