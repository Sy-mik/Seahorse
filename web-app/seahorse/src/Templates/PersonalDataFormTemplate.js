import { v4 as uuidv4 } from "uuid";
export function PersonalDataFormTemplate() {
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
  ];
}
