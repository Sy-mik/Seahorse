import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormComponent from "./DynamicFormComponent";

export default function DynamicFormContainer() {
  const [state, setState] = useState([]);

  function addItem(itemType) {
    const uuid = uuidv4();
    const item = {
      id: uuid,
      actionType: itemType,
      formName: "Your form name",
    };
    const joined = [...state, item];
    setState([...joined]);
  }

  return (
    <DynamicFormComponent
      state={state}
      setState={setState}
      addItem={addItem}
    ></DynamicFormComponent>
  );
}
