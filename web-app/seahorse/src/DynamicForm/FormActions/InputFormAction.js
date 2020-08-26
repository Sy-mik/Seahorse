import React, { useState, useRef } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IconName, AiOutlineForm } from "react-icons/ai";
import { InputFormTypes } from "../../Constants/FormActions";
import { v4 as uuidv4 } from "uuid";

export default function InputFormAction({ item, onActionChanged }) {
  const nameRef = useRef();
  const typeRef = useRef();

  function onTypeChange() {
    item.inputType = typeRef.current.value;
    onActionChanged();
  }

  function onNameChange() {
    item.labelName = nameRef.current.value;
    onActionChanged();
  }

  return (
    <div>
      <AiOutlineForm size={20} onClick={() => {}} />
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label className="text-center" column sm={3}>
            Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              onChange={() => onNameChange()}
              ref={nameRef}
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
              ref={typeRef}
              onChange={() => onTypeChange()}
              as="select"
              defaultValue="Choose..."
            >
              {/* TODO - distinction between translation and .value */}
              <option>{InputFormTypes.Text}</option>
              <option>{InputFormTypes.Date}</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
