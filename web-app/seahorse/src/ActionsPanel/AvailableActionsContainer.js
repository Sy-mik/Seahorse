import React, { useState, Component } from "react";
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";
import { GiCigarette, GiGears } from "react-icons/gi";
import { CgListTree } from "react-icons/cg";

import { v4 as uuidv4 } from "uuid";
import { Colors } from "../Constants/Theme";
import {
  FormTemplates,
  InputFormTypes,
  ActionCategory,
} from "../Constants/FormActions";
import { AvailableActionItem } from "./AvailableActionItem";
import { BsCheckBox, BsCalendar } from "react-icons/bs";
import { AvailableActions } from "./AvailableActions";

export function IconsFactory({ iconName, iconSize}) {
  switch (iconName) {
    case AiOutlineForm:
      return <AiOutlineForm size={iconSize} />;
    case BsCheckBox:
      return <BsCheckBox size={iconSize} />;
    case BsCalendar:
      return <BsCalendar size={iconSize} />;
    case "Label":
      return <>Txt</>;
    case CgListTree:
      return <CgListTree size={iconSize} />;
    case AiOutlineUser:
      return <AiOutlineUser size={iconSize} />;
    case GiCigarette:
      return <GiCigarette size={iconSize} />;
    case GiGears:
      return <GiGears size={iconSize} />;
    default:
      return <AiOutlineForm size={iconSize} />;
  }
}
export default function AvailableActionsContainer({ onClick }) {
  const spaceBetweenItems = 5;
  console.log(AvailableActions);
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
          {AvailableActions.filter(
            (x) => x.category === ActionCategory.AvailableActions
          ).map((item) => (
            <AvailableActionItem
              name={item.name}
              onClick={() =>
                onClick(
                  item.type,
                  item.defaultAmountOfGeneratedItems,
                  item.inputType
                )
              }
            >
              <IconsFactory iconName={item.icon} iconSize={20}></IconsFactory>
            </AvailableActionItem>
          ))}
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
        {AvailableActions.filter(
          (x) => x.category === ActionCategory.Templates
        ).map((item) => (
          <AvailableActionItem
            name={item.name}
            onClick={() =>
              onClick(
                item.type,
                item.defaultAmountOfGeneratedItems,
                item.inputType
              )
            }
          >
            <IconsFactory iconName={item.icon}></IconsFactory>
          </AvailableActionItem>
        ))}
      </div>
    </div>
  );
}
