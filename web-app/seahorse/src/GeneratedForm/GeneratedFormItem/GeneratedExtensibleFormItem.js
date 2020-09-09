import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormTemplates } from "../../Constants/FormActions";
import { ItemGenerator } from "./ItemGenerator";

export default function GeneratedExtensibleFormItem({ item, onDataRefreshed }) {
  function changeItemValue(value) {
    item.value = value;
    onDataRefreshed();
  }

  return (
    <div>
      <Form>
        <Form.Group controlId={`form${Math.random()}`}>
          {item.inputs?.map((item, index) => (
            <ItemGenerator
              onItemChange={changeItemValue}
              key={index}
              index={index}
              type={item.type}
              inputName={item.name}
            ></ItemGenerator>
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}
