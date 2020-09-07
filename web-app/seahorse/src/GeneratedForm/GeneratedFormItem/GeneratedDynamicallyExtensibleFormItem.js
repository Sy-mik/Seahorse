import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FormTemplates } from "../../Constants/FormActions";
import { ItemGeneratorContainer } from "./ItemGeneratorContainer";

export default function GeneratedDynamicallyExtensibleFormItem({
  item,
  onDataRefreshed,
}) {
  return (
    <div>
      <Form>
        <Form.Group controlId={`form${Math.random()}`}>
          {item.inputs?.map((item, index) => (
            <ItemGeneratorContainer
              key={item.key}
              item={item}
              index={index}
              onDataRefreshed={onDataRefreshed}
            ></ItemGeneratorContainer>
          ))}
        </Form.Group>
      </Form>
    </div>
  );
}
