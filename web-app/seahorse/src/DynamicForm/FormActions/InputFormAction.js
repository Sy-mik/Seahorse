import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { AiOutlineForm } from "react-icons/ai";
import { InputFormTypes } from "../../Constants/FormActions";

export default function InputFormAction({ item, onActionChanged }) {
  function onTypeChange(e) {
    item.inputType = e.target.value;
    onActionChanged();
  }

  function onNameChange(e) {
    item.labelName = e.target.value;
    onActionChanged();
  }

  function onFormNameChange(e) {
    item.formName = e.target.value;
    onActionChanged();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form>
          <Form.Group as={Row} controlId="formName">
            <Form.Label className="text-center" column sm={3}>
              Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                onChange={(e) => onNameChange(e)}
                type="text"
                placeholder="Label name"
              />
            </Col>
          </Form.Group>

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
                <option>{InputFormTypes.Text}</option>
                <option>{InputFormTypes.Date}</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
