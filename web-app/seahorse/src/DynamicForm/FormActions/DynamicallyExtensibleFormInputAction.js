import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { InputFormTypes } from "../../Constants/FormActions";
import DynamicallyExtensibleInput from "./DynamicallyExtensibleInputFactory";
import { v4 as uuidv4 } from "uuid";

export default function DynamicallyExtensibleFormInputAction({
  item,
  onActionChanged,
}) {
  const [formComponents, setFormComponents] = useState([...item.inputs]);

  function changeInputType(type, key) {
    const newInputName = formComponents.map((item) => {
      if (item.key === key) {
        item.type = type;
      }
      return item;
    });

    setFormComponents(newInputName);
    item.inputs = newInputName;
    onActionChanged();
  }

  function addNextField() {
    const newInputNames = [
      ...formComponents,
      {
        key: uuidv4(),
        name: "Label Name",
        type: InputFormTypes.Text,
      },
    ];
    setFormComponents(newInputNames);
    item.inputs = newInputNames;
    onActionChanged();
  }

  function removeItem(key) {
    const removedElements = formComponents.filter(
      (element) => element.key !== key
    );
    setFormComponents(removedElements);
    item.inputs = removedElements;
    console.log(removedElements);
    onActionChanged();
  }

  function changeLabelName(name, key) {
    const newInputName = formComponents.map((item) => {
      if (item.key === key) {
        item.name = name;
      }
      return item;
    });

    setFormComponents(newInputName);
    item.inputs = newInputName;
    onActionChanged();
  }

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
              type={item.type}
              key={index}
              id={item.key}
              label={item.name}
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
