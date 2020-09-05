import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

export default function FormNameContainer({ name, onFormNamechange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form>
        <Form.Group controlId="formName">
          <h3 style={{ textAlign: "center" }}>Form Name</h3>
          <Col>
            <Form.Control
              onChange={(e) => onFormNamechange(e.target.value)}
              type="text"
              defaultValue={name}
              placeholder="Form name"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
