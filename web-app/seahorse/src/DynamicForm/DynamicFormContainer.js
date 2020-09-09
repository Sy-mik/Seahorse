import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormComponent from "./DynamicFormComponent";
import { FormTemplates } from "../Constants/FormActions";
import { PersonalDataFormTemplate } from "../Templates/PersonalDataFormTemplate";
import { AddictionsFormTemplate } from "../Templates/AddictionsFormTemplate";
import { DynamicExample } from "../Templates/DynamicExample";

export default function DynamicFormContainer() {
  const [state, setState] = useState([]);
  //All methods should be moved to redux
  function blankItem(id, actionType, amountOfInputs, itemType) {
    const inputs = [];
    for (let i = 0; i < amountOfInputs; i++) {
      inputs.push({
        key: uuidv4(),
        name: "Name",
        type: itemType,
        value: "",
        hidden: false,
      });
    }
    return {
      id: id,
      actionType: actionType,
      formName: "Your form name",
      inputs: inputs,
    };
  }

  function addItem(actionType, amountOfInputs, itemType) {
    let item;
    let uuid = uuidv4();
    amountOfInputs = amountOfInputs ?? 1;

    switch (actionType) {
      case FormTemplates.PersonalDataFormTemplate:
        item = PersonalDataFormTemplate();
        break;
      case FormTemplates.AddictionsFormTemplate:
        item = AddictionsFormTemplate();
        break;
      case FormTemplates.PersonalDataWithAddictionsTemplate:
        item = DynamicExample();
        break;
      default:
        item = blankItem(uuid, actionType, amountOfInputs, itemType);
    }

    item.id = uuid;
    item.key = uuid;
    let joined = [];
    if (item.length > 1) {
      joined = [...state, ...item];
    } else {
      joined = [...state, item];
    }
    setState([...joined]);
  }

  function refershData() {
    setState([...state]);
    console.log(JSON.stringify(state));
  }

  return (
    <DynamicFormComponent
      onDataRefreshed={refershData}
      state={state}
      setState={setState}
      addItem={addItem}
    ></DynamicFormComponent>
  );
}
