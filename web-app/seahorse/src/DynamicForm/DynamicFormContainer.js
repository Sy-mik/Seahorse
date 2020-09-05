import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DynamicFormComponent from "./DynamicFormComponent";
import { FormTemplates } from "../Constants/FormActions";
import { PersonalDataFormTemplate } from "../Templates/PersonalDataFormTemplate";

export default function DynamicFormContainer() {
  const [state, setState] = useState([]);

  function blankItem(id, itemType) {
    return {
      id: id,
      actionType: itemType,
      formName: "Your form name",
      inputs: [
        {
          key: uuidv4(),
          name: "Name",
          type: "Text",
        },
      ],
    };
  }

  function addItem(itemType) {
    let uuid = uuidv4();
    let item;
    switch (itemType) {
      case FormTemplates.PersonalDataFormTemplate:
        item = PersonalDataFormTemplate();
        break;
      default:
        item = blankItem(uuid, itemType);
    }

    item.id = uuid;
    item.key = uuid;
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
