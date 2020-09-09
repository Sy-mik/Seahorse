import React, { useState, Component } from "react";

import { v4 as uuidv4 } from "uuid";
import { Colors } from "../Constants/Theme";
import {
  FormTemplates,
  InputFormTypes,
  ActionCategory,
} from "../Constants/FormActions";
import { AvailableActionItem } from "./AvailableActionItem";
import { AvailableActions } from "./AvailableActions";
import { IconsFactory } from "./IconsFactory";

export default function AvailableActionsContainer({ onClick }) {
  const spaceBetweenItems = 5;
  return (
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
