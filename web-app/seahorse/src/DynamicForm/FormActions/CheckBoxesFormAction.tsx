import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IconName, AiOutlineForm } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { BsCheckBox } from "react-icons/bs";

export default function CheckBoxFormAction() {
  const [checkBoxes, setCheckBoxes] = useState([uuidv4]);

  return (
    <div>
      <BsCheckBox size={20}></BsCheckBox>

      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label className="text-center" column sm={3}>
            Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Input name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label className="text-center" column sm={3}>
            CheckBox
          </Form.Label>
          <Col sm={9}>
            {checkBoxes.map((id) => (
              <div key={`default-${id}`} className="mb-3">
                <Form.Check
                  type="checkbox"
                  id={`default-${id}`}
                  label={`input here`}
                />
              </div>
            ))}
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
