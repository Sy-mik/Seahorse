import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FormActions } from "../../Constants/FormActions";
import DynamicallyExtensibleInputFactory from "./DynamicallyExtensibleInputFactory";

export default function DynamicallyExtensibleFormInputAction({
  item,
  onActionChanged,
}) {
  const [inputsNames, setInputsNames] = useState([""]);
  const [inputType, setInputType] = useState(FormActions.TextInputForm);

  function onTypeChange(e) {
    const newType = e.target.value;
    item.inputType = newType;
    setInputType(newType);
    onActionChanged();
  }

  function addNextField() {
    const newInputNames = [...inputsNames, ""];
    item.inputsNames = newInputNames;
    setInputsNames(newInputNames);
    onActionChanged();
  }

  function onRemoveItem(i) {
    const removedElements = inputsNames.filter((element, index) => index !== i);
    setInputsNames(removedElements);
    item.inputsNames = removedElements;
    onActionChanged();
  }

  function onChangeLabelName(name, index) {
    const newInputName = inputsNames.map((item, i) => {
      if (index === i) {
        item = name;
      }
      return item;
    });

    setInputsNames(newInputName);
    item.inputsNames = newInputName;
    onActionChanged();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form>
          <Form.Group as={Row} controlId="formType">
            <Form.Label className="text-center" size="sm" column sm={3}>
              Type
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                onChange={(e) => onTypeChange(e)}
                as="select"
                defaultValue="Choose..."
              >
                <option value={FormActions.TextInputForm}>Text Input</option>
                <option value={FormActions.CheckBoxesForm}>Checkbox</option>
              </Form.Control>
            </Col>
          </Form.Group>

          {inputsNames.map((item, index) => (
            <DynamicallyExtensibleInputFactory
              onChangeLabelName={onChangeLabelName}
              onRemoveItem={onRemoveItem}
              key={index}
              id={index}
              labelName={item}
              inputType={inputType}
            ></DynamicallyExtensibleInputFactory>
          ))}
        </Form>
      </div>
      <Button
        style={{ alignSelf: "right" }}
        onClick={() => {
          addNextField();
        }}
      >
        Add next item
      </Button>
    </div>
  );
}
