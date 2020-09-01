import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FormActions } from "../../Constants/FormActions";
import { AiOutlineForm } from "react-icons/ai";
import { BsCheckBox } from "react-icons/bs";

export default function DynamicallyExtensibleInputFactory({
  inputType,
  id,
  onChangeLabelName,
  onRemoveItem,
}) {
  switch (inputType) {
    case FormActions.TextInputForm: {
      return (
        <Form.Group
          as={Row}
          controlId="formName"
          style={{ textAlign: "center" }}
        >
          <Col sm={3}>
            <AiOutlineForm size={20} />
          </Col>
          <Col sm={8}>
            <Form.Control
              key={id}
              onChange={(e) => onChangeLabelName(e.target.value, id)}
              type="text"
              placeholder="Label name"
            />
          </Col>
          <Col sm={1}>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => onRemoveItem(id)}
            >
              X
            </Button>
          </Col>
        </Form.Group>
      );
    }
    case FormActions.CheckBoxesForm: {
      return (
        <Form.Group
          as={Row}
          controlId="formName"
          style={{ textAlign: "center" }}
        >
          <Col sm={3}>
            <BsCheckBox size={20} />
          </Col>
          <Col sm={8}>
            <Form.Control
              key={id}
              onChange={(e) => onChangeLabelName(e.target.value, id)}
              type="text"
              placeholder="Checkbox name"
              checked={true}
            />
          </Col>
          <Col sm={1}>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => onRemoveItem(id)}
            >
              X
            </Button>
          </Col>
        </Form.Group>
      );
    }
    default: {
      return <></>;
    }
  }
}
