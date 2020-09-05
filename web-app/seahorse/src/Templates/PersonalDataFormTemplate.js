export function PersonalDataFormTemplate() {
  return {
    actionType: "DynamicallyExtensibleForm",
    formName: "Personal data",
    id: "",
    inputs: [
      {
        key: "0",
        name: "Name",
        type: "Text",
      },
      {
        key: "1",
        name: "Birth date",
        type: "Date",
      },
      {
        key: "2",
        name: "Has a dog",
        type: "Label",
      },
      {
        key: "3",
        name: "Yes",
        type: "Radio",
      },
      {
        key: "4",
        name: "No",
        type: "Radio",
      },
    ],
  };
}
