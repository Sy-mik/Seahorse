import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { InputFormAction } from "../../Constants/FormActions";

export default function GeneratedInputFormItem({ item }) {
  useEffect(() => {
    console.log(`item input type ${item.inputType}`);
  }, [item]);
  return (
    <div>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label className="text-center">{item.labelName}</Form.Label>
          <Form.Control type={item.inputType} placeholder="User input" />
        </Form.Group>
      </Form>
    </div>
  );
}
