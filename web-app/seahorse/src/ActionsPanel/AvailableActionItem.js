import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import { FormTemplates } from "../Constants/FormActions";
export function AvailableActionItem({ onClick, name, ...props }) {
  const flexItemStyle = {
    display: "flex",
    marginLeft: 10,
    flexDirection: "column",
    maxWidth: 65,
  };

  return (
    <div style={flexItemStyle}>
      <Button
        style={{ maxWidth: 65 }}
        variant="outline-primary"
        size="lg"
        type="button"
        onClick={() => onClick(FormTemplates.DynamicallyExtensibleForm, uuidv4())}
      >
        {props.children}
      </Button>
      <p style={{ paddingTop: 5, fontSize: 12 }}>{name} </p>
    </div>
  );
}
