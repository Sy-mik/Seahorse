import { v4 as uuidv4 } from "uuid";

export function AddictionsFormTemplate() {
  return [
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
          key: uuidv4(),
          name: "Milk",
          type: "Checkbox",
          value: "",
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
          name: "Orange juic",
          type: "Checkbox",
          value: "",
        },
      ],
      key: uuidv4(),
    },
  ];
}
