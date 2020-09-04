import React, { useState } from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { BsGear } from "react-icons/bs";

import { Button } from "react-bootstrap";
import { Colors } from "../Constants/Theme";
import { FormActions } from "../Constants/FormActions";

export default function AvailableActionsContainer({ onClick }) {
  const spaceBetweenItems = 5;
  const flexItemStyle = {
    display: "flex",
    marginLeft: 10,
    flexDirection: "column",
    maxWidth: 70,
  };
  return (
    //   ugly as hell
    <div>
      <div style={{ background: Colors.containerBackground }}>
        <h3>Available Actions</h3>
        <div
          style={{
            display: "flex",
            marginLeft: spaceBetweenItems,
            flexWrap: "wrap",
          }}
        >
          {/* <div style={flexItemStyle}>
            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={() => onClick(FormActions.TextInputForm)}
            >
              <AiOutlineForm size={25} />
            </Button>
            <h6 style={{ paddingTop: 5 }}>Input form</h6>
          </div>

          <div style={flexItemStyle}>
            <Button
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={() => onClick(null)}
            >
              <BsCheckBox size={25} />
            </Button>
            <h6 style={{ paddingTop: 5 }}>Checkboxes</h6>
          </div> */}

          <div style={flexItemStyle}>
            <Button
              style={{ maxWidth: 70 }}
              variant="outline-primary"
              size="lg"
              type="button"
              onClick={() => onClick(FormActions.DynamicallyExtensibleForm)}
            >
              <BsGear size={25} />
            </Button>
            <h6 style={{ paddingTop: 5 }}>Dynamic </h6>
          </div>
        </div>
        <h3>Templates</h3>
        <div style={flexItemStyle}>
          <Button
            style={{ maxWidth: 70 }}
            variant="outline-primary"
            size="lg"
            type="button"
            onClick={() => onClick(FormActions.DynamicallyExtensibleForm)}
          >
            <AiOutlineUser size={25}></AiOutlineUser>
          </Button>
          <p style={{ paddingTop: 5 }}>Personal data</p>
        </div>
      </div>
    </div>
  );
}
