import React, { useState } from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { GiCigarette, GiGears } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";

import { v4 as uuidv4 } from "uuid";
import { Colors } from "../Constants/Theme";
import { FormTemplates, InputFormTypes } from "../Constants/FormActions";
import { AvailableActionItem } from "./AvailableActionItem";
import { BsCheckBox, BsCalendar } from "react-icons/bs";

export default function AvailableActionsContainer({ onClick }) {
  const spaceBetweenItems = 5;
  return (
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
              onClick(FormTemplates.TextInputForm, 1, InputFormTypes.Text)
            }
          >
            <AiOutlineForm size={25} />
          </AvailableActionItem>
          <AvailableActionItem
            name="Checkbox"
            onClick={() =>
              onClick(FormTemplates.CheckBoxesForm, 1, InputFormTypes.CheckBox)
            }
          >
            <BsCheckBox size={25} />
          </AvailableActionItem>

          <AvailableActionItem
            name="Date"
            onClick={() =>
              onClick(FormTemplates.DateForm, 1, InputFormTypes.Date)
            }
          >
            <BsCalendar size={25} />
          </AvailableActionItem>
          <AvailableActionItem
            name="Label"
            onClick={() =>
              onClick(FormTemplates.LabelForm, 0, InputFormTypes.Label)
            }
          >
            <h6>Txt</h6>
          </AvailableActionItem>
          <AvailableActionItem
            name="Conditional"
            onClick={() => onClick(FormTemplates.ConditionalForm, 0)}
          >
            <CgListTree size={25}></CgListTree>
          </AvailableActionItem>
          <AvailableActionItem
            name="Dynamic form"
            onClick={() => onClick(FormTemplates.DynamicallyExtensibleForm, 1)}
          >
            <GiGears size={25}></GiGears>
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
          onClick={() => onClick(FormTemplates.PersonalDataFormTemplate)}
        >
          <AiOutlineUser size={25}></AiOutlineUser>
        </AvailableActionItem>
        <AvailableActionItem
          name="Addictions"
          onClick={() => onClick(FormTemplates.AddictionsFormTemplate)}
        >
          <GiCigarette size={25}></GiCigarette>
        </AvailableActionItem>
      </div>
    </div>
  );
}
