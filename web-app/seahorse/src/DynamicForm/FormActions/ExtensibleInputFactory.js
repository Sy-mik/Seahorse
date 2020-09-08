import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputFormTypes } from "../../Constants/FormActions";

export default function DynamicallyExtensibleInput({
  id,
  onChangeLabelName,
  onRemoveItem,
  onLabelTypeChange,
  label,
  type,
  hideTypePicker,
}) {
  return (
    <Form.Group as={Row} controlId="formName" style={{ textAlign: "center" }}>
      {hideTypePicker ? (
        <></>
      ) : (
        <Col lg={3}>
          <Form.Control
            onChange={(e) => onLabelTypeChange(e.target.value, id)}
            as="select"
            defaultValue={type}
            style={{ maxWidth: 70 }}
          >
            <option value={InputFormTypes.Text}>📝</option>
            <option value={InputFormTypes.Date}>📅</option>
            <option value={InputFormTypes.CheckBox}>✅</option>
            <option value={InputFormTypes.Radio}>🔘</option>
            <option value={InputFormTypes.Label}>Label</option>
          </Form.Control>
        </Col>
      )}

      <Col>
        <Form.Control
          key={id}
          onChange={(e) => onChangeLabelName(e.target.value, id)}
          type="text"
          placeholder="Label name"
          defaultValue={label}
        />
      </Col>
      <Col sm={2}>
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
