import React, { useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import FormNameContainer from "./FormNameContainer";

export default function ActionWrapperComponent({
  onDelete,
  provided,
  snapshot,
  index,
  onFormNamechange,
  item,
  name,
  ...props
}) {
  return (
    <div style={{ padding: 5 }}>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Card border={snapshot.isDragging ? "primary" : ""} style={{}}>
          <Card.Body>
            <Card.Title>
              {name} 
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
            {props.children}

            <Card.Link
              onClick={() => {
                onDelete(index);
              }}
              style={{ color: "red" }}
              href="#"
            >
              Remove
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
    // <div
    //   ref={provided.innerRef}
    //   {...provided.draggableProps}
    //   {...provided.dragHandleProps}
    //   style={{
    //     userSelect: "none",
    //     margin: `0 0 ${grid}px 0`,
    //     padding: 5,
    //     background: snapshot.isDragging ? "#56CCF2" : "white",
    //     height: "auto",
    //     borderWidth: "1px",
    //     boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.50)",
    //     borderRadius: 5,
    //     borderStyle: snapshot.isDragging ? "solid" : "none",
    //     ...provided.draggableProps.style,
    //   }}
    // >
    //   <div
    //     style={{
    //       width: "100%",
    //       paddingRight: 15,
    //       marginBottom: 10,
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-between"
    //     }}
    //   >
    //     <h2>{name}</h2>
    //     <Button
    //       style={{ justifySelf: "flex-end", width:30, height:30 }}
    //       onClick={() => {
    //         onDelete(index);
    //       }}
    //       variant="outline-danger"
    //       size="sm"
    //     >
    //       X
    //     </Button>
    //   </div>
    //   <div style={{ display: "block" }}>{props.children}</div>
    // </div>
  );
}
