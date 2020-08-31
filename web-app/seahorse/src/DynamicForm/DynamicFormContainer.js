import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormComponent from "./DynamicFormComponent";
import { authServiceLogOut } from "../services/AuthService";

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

  return (
    <>
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
