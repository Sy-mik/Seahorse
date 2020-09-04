import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormActions, InputFormTypes } from "../../Constants/FormActions";

function ItemGenerator({ type, inputName, index }) {
  switch (type) {
    case InputFormTypes.Text: {
      return (
        <div>
          <Form.Group controlId="formName">
            <Form.Label className="text-center">{inputName}</Form.Label>
            <Form.Control key={index} type="text" placeholder="User input" />
          </Form.Group>
        </div>
      );
    }
    // can be improved by just type={whatevr}
    case InputFormTypes.Date: {
      return (
        <div>
          <Form.Group controlId="formName">
            <Form.Label className="text-center">{inputName}</Form.Label>
            <Form.Control type="date" placeholder="User input" />
          </Form.Group>
        </div>
      );
    }
    case InputFormTypes.CheckBox: {
      return (
        <div>
          <Form.Group controlId={`formBasicCheckbox${Math.random()}`}>
            <Form.Check type="checkbox" label={inputName} />
          </Form.Group>
        </div>
      );
    }
    case InputFormTypes.Radio: {
      return (
        <div>
          <Form.Check
            type="radio"
            name="formHorizontalRadios"
            label={inputName}
            id={index}
          />
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
          <Form.Group controlId="formName">
            <Form.Label className="text-center">{inputName}</Form.Label>
            <Form.Control key={index} type="text" placeholder="User input" />
          </Form.Group>
        </div>
      );
    }
  }
}

export default function GeneratedDynamicallyExtensibleFormItem({ item }) {
  return (
    <div>
      <Form>
        <Form.Group controlId={`formBasicCheckbox${Math.random()}`}>
          {item.inputsNames?.map((item, index) => (
            <ItemGenerator
              key={index}
              index={index}
              type={item.type}
              inputName={item.name}
            ></ItemGenerator>
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}
