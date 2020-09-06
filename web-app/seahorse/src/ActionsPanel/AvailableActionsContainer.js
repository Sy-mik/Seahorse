import React, { useState } from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { GiCigarette } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";

import { v4 as uuidv4 } from "uuid";
import { Colors } from "../Constants/Theme";
import { FormTemplates } from "../Constants/FormActions";
import { AvailableActionItem } from "./AvailableActionItem";

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
          <AvailableActionItem
            name="Conditional"
            onClick={() => onClick(FormTemplates.ConditionalForm, uuidv4())}
          >
            <CgListTree size={25}></CgListTree>
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
