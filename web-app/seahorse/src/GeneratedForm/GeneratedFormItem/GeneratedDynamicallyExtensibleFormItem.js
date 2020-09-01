import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormActions } from "../../Constants/FormActions";

function ItemGenerator({ type, inputName, index }) {
  switch (type) {
    case FormActions.TextInputForm: {
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
    case FormActions.CheckBoxesForm: {
      return (
        <div>
          <Form >
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label={inputName} />
            </Form.Group>
          </Form>
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
      {item.inputsNames?.map((inputName, index) => (
        <ItemGenerator
          key={index}
          index={index}
          type={item.inputType}
          inputName={inputName}
        ></ItemGenerator>
      ))}
    </div>
  );
}
