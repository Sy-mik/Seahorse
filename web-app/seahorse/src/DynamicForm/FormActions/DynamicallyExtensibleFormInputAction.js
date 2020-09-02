import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FormActions, InputFormTypes } from "../../Constants/FormActions";
import DynamicallyExtensibleInput from "./DynamicallyExtensibleInputFactory";

export default function DynamicallyExtensibleFormInputAction({
  item,
  onActionChanged,
}) {
  const [formComponents, setFormComponents] = useState([
    { key: 0, name: "Label Name", type: InputFormTypes.Text },
  ]);

  function changeInputType(type, key) {
    const newInputName = formComponents.map((item, i) => {
      if (item.key === key) {
        item.type = type;
      }
      return item;
    });

    setFormComponents(newInputName);
    item.inputsNames = newInputName;
    onActionChanged();
  }

  function addNextField() {
    const newInputNames = [
      ...formComponents,
      {
        key: formComponents.length,
        name: "Label Name",
        type: InputFormTypes.Text,
      },
    ];
    setFormComponents(newInputNames);
    item.inputsNames = newInputNames;
    onActionChanged();
  }

  function removeItem(i) {
    const removedElements = formComponents.filter(
      (element, index) => index !== i
    );
    setFormComponents(removedElements);
    item.inputsNames = removedElements;
    onActionChanged();
  }

  function changeLabelName(name, index) {
    const newInputName = formComponents.map((item, i) => {
      if (item.key === index) {
        item.name = name;
      }
      return item;
    });

    setFormComponents(newInputName);
    item.inputsNames = newInputName;
    onActionChanged();
  }

  // function changeLabelName(name, index) {
  //   const itemCheck = (item, index) => item.key === index;
  //   const updateFunc = (item, changedValue) => (item.name = changedValue);
  // }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form>
          <Row>
            <Col sm={3}>Type</Col>
            <Col sm={7}>Label name</Col>
          </Row>
          {formComponents.map((item, index) => (
            <DynamicallyExtensibleInput
              onChangeLabelName={changeLabelName}
              onRemoveItem={removeItem}
              onLabelTypeChange={changeInputType}
              key={index}
              id={index}
              labelName={item}
            ></DynamicallyExtensibleInput>
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
