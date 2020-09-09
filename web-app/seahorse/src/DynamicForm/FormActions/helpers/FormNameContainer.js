import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

export default function FormNameContainer({ name, onFormNamechange }) {
  return (
    <div style={{padding:10, display: "flex", flexDirection: "column" }}>
      <Form>
        <Form.Group controlId="formName">
            <Form.Control
              onChange={(e) => onFormNamechange(e.target.value)}
              type="text"
              defaultValue={name}
              placeholder="Form name"
            />
        </Form.Group>
      </Form>
    </div>
  );
}
