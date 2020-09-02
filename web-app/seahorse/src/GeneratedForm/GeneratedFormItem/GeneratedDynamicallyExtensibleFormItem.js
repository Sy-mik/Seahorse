import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormActions, InputFormTypes } from "../../Constants/FormActions";

function ItemGenerator({ type, inputName, index }) {
  switch (type) {
    case InputFormTypes.Text: {
      return (
        <div>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="text-center">{inputName}</Form.Label>
              <Form.Control key={index} type="text" placeholder="User input" />
            </Form.Group>
          </Form>
        </div>
      );
    }
    case InputFormTypes.CheckBox: {
      return (
        <div>
          <Form>
            <Form.Group controlId={`formBasicCheckbox${Math.random()}`}>
              <Form.Check type="checkbox" label={inputName} />
            </Form.Group>
          </Form>
        </div>
      );
    }
    case InputFormTypes.Label: {
      return (
        <div>
          <Form.Label>{inputName}</Form.Label>
        </div>
      );
    }
    default: {
      return (
        <div>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="text-center">{inputName}</Form.Label>
              <Form.Control key={index} type="text" placeholder="User input" />
            </Form.Group>
          </Form>
        </div>
      );
    }
  }
}

export default function GeneratedDynamicallyExtensibleFormItem({ item }) {
  return (
    <div>
      {item.inputsNames?.map((item, index) => (
        <ItemGenerator
          key={index}
          index={index}
          type={item.type}
          inputName={item.name}
        ></ItemGenerator>
      ))}
    </div>
  );
}
