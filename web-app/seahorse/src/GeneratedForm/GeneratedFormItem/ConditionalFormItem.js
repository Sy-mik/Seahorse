import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormTemplates } from "../../Constants/FormActions";
import { ItemGenerator } from "./ItemGenerator";
function ConditionalFormItemComponent({
  isTreeVisible,
  item,
  onDataRefreshed,
}) {
  function changeItemValue(value) {
    item.value = value;
    onDataRefreshed();
  }

  return isTreeVisible ? (
    <Form.Group controlId={`form${Math.random()}`}>
      {item.inputs?.map((item, index) => (
        <ItemGenerator
          onItemChange={changeItemValue}
          key={index}
          index={index}
          type={item.type}
          inputName={item.name}
        ></ItemGenerator>
      ))}
    </Form.Group>
  ) : null;
}
export default function ConditionalFormItem({ item, onDataRefreshed, state }) {
  const [isTreeVisible, setIsTreeVisible] = useState(false);

  useEffect(() => {
    isConditionalTrue();
    setIsTreeVisible(isConditionalTrue());
  }, [item, state]);

  function isConditionalTrue() {
    const conditional = item.conditional;
    let checkedVariableValue = "";
    state.forEach((element) => {
      element.inputs.forEach((input) => {
        if (input.key === conditional?.xParameterId) {
          checkedVariableValue = input.value;
        }
      });
    });
    return (
      checkedVariableValue.toString() === conditional?.yPrameterValue.toString()
    );
  }
  return (
    <div>
      <Form>
        <ConditionalFormItemComponent
          isTreeVisible={isTreeVisible}
          item={item}
          onDataRefreshed={onDataRefreshed}
        ></ConditionalFormItemComponent>
      </Form>
    </div>
  );
}
