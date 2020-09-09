import React from "react";
import { Form } from "react-bootstrap";
import { InputFormTypes } from "../../Constants/FormActions";

export function ItemGenerator({ type, inputName, index, onItemChange }) {
  switch (type) {
    case InputFormTypes.Text: {
      return (
        <div>
          <Form.Group controlId="formName">
            <Form.Label className="text-center">{inputName}</Form.Label>
            <Form.Control
              onChange={(e) => onItemChange(e.target.value)}
              key={index}
              type="text"
              placeholder="User input"
            />
          </Form.Group>
        </div>
      );
    }
    case InputFormTypes.Date: {
      return (
        <div>
          <Form.Group controlId="formName">
            <Form.Label className="text-center">{inputName}</Form.Label>
            <Form.Control
              onChange={(e) => onItemChange(e.target.value)}
              type="date"
              placeholder="User input"
            />
          </Form.Group>
        </div>
      );
    }
    case InputFormTypes.CheckBox: {
      return (
        <div>
          <Form.Group controlId={`formBasicCheckbox${Math.random()}`}>
            <Form.Check
              onChange={(e) => onItemChange(e.target.checked)}
              type="checkbox"
              label={inputName}
            />
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
            onChange={(e) => onItemChange(e.target.checked)}
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
            <Form.Control
              onChange={(e) => onItemChange(e.target.value)}
              key={index}
              type="text"
              placeholder="User input"
            />
          </Form.Group>
        </div>
      );
    }
  }
}
