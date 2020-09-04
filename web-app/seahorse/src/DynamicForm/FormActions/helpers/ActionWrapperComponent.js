import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormNameContainer from "./FormNameContainer";

export default function ActionWrapperComponent({
  onDelete,
  provided,
  snapshot,
  index,
  onFormNamechange,
  ...props
}) {
  const grid = 8;
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        userSelect: "none",
        margin: `0 0 ${grid}px 0`,
        padding: 5,
        background: snapshot.isDragging ? "#56CCF2" : "white",
        height: "auto",
        borderWidth: "1px",
        boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.50)",

        borderStyle: snapshot.isDragging ? "solid" : "none",
        // need to be applied on draggables
        ...provided.draggableProps.style,
      }}
    >
      {/* <IoIosRemoveCircleOutline/> */}
      <Button
        style={{ float: "right", marginLeft: 10 }}
        onClick={() => {
          onDelete(index);
        }}
        variant="outline-danger"
        size="sm"
      >
        X
      </Button>
      <div style={{}}>
        <FormNameContainer
          onFormNamechange={onFormNamechange}
        ></FormNameContainer>
        {props.children}
      </div>
    </div>
  );
}
