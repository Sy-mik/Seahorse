import { v4 as uuidv4 } from "uuid";
export function DynamicExample() {
    let conditionalVariableId = uuidv4();
  return [
    {
      id: uuidv4(),
      actionType: "LabelForm",
      formName: "Personal Data",
      inputs: [],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "TextInputForm",
      formName: "Your form name",
      inputs: [
        {
          key: uuidv4(),
          name: "Name",
          type: "Text",
          value: "",
          hidden: false,
        },
        {
          key: uuidv4(),
          name: "Surname",
          type: "Text",
          value: "",
        },
      ],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "DateForm",
      formName: "Your form name",
      inputs: [
        {
          key: uuidv4(),
          name: "Date of birth",
          type: "Date",
          value: "",
          hidden: false,
        },
      ],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "LabelForm",
      formName: "Addictions",
      inputs: [],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "CheckboxesForm",
      formName: "Your form name",
      inputs: [
        {
          key: conditionalVariableId,
          name: "Milk",
          type: "Checkbox",
          value: false,
          hidden: false,
        },
        {
          key: uuidv4(),
          name: "Chocolate",
          type: "Checkbox",
          value: "",
        },
        {
          key: uuidv4(),
          name: "Orange juice",
          type: "Checkbox",
          value: "",
        },
      ],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "LabelForm",
      formName: "(Click on milk)",
      inputs: [],
      key: uuidv4(),
    },
    {
      id: uuidv4(),
      actionType: "ConditionalForm",
      formName: "Your form name",
      inputs: [
        {
          key: uuidv4(),
          name: "How much milk drinks",
          type: "Text",
          value: "",
        },
      ],
      key: uuidv4(),
      conditional: {
        xParameterName: "Milk",
        xParameterValue: "Milk",
        yParameterName: "",
        yPrameterValue: true,
        type: "Checkbox",
        xParameterid: conditionalVariableId,
        yParameterid: uuidv4(),
        operator: "",
      },
    },
  ];
}
