import React, { useState } from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";

import { GiCigarette } from "react-icons/gi";

import { BsGear } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

import { Button } from "react-bootstrap";
import { Colors } from "../Constants/Theme";
import { FormTemplates } from "../Constants/FormActions";

function AvailableActionItem({ onClick, name, ...props }) {
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
        onClick={() =>
          onClick(FormTemplates.DynamicallyExtensibleForm, uuidv4())
        }
      >
        {props.children}
      </Button>
      <p style={{ paddingTop: 5, fontSize:12 }}>{name} </p>
    </div>
  );
}

export default function AvailableActionsContainer({ onClick }) {
  const spaceBetweenItems = 5;
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
          <AvailableActionItem
            name="Form"
            onClick={() =>
              onClick(FormTemplates.DynamicallyExtensibleForm, uuidv4())
            }
          >
            <AiOutlineForm size={25} />
          </AvailableActionItem>
        </div>
      </div>
      <h3>Templates</h3>

      <div
        style={{
          display: "flex",
          marginLeft: spaceBetweenItems,
          flexWrap: "wrap",
        }}
      >
        <AvailableActionItem
          name="Personal data"
          onClick={() =>
            onClick(FormTemplates.PersonalDataFormTemplate, uuidv4())
          }
        >
          <AiOutlineUser size={25}></AiOutlineUser>
        </AvailableActionItem>
        <AvailableActionItem
          name="Addictions"
          onClick={() =>
            onClick(FormTemplates.AddictionsFormTemplate, uuidv4())
          }
        >
          <GiCigarette size={25}></GiCigarette>
        </AvailableActionItem>
      </div>
    </div>
  );
}
