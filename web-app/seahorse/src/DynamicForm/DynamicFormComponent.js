import React from "react";
import AvailableActionsContainer from "../ActionsPanel/AvailableActionsContainer";
import GeneratedFormDynamicViewContainer from "../GeneratedForm/GeneratedFormDynamicViewContainer";
import { Colors } from "../Constants/Theme";
import DroppableAreaContainer from "./DroppableAreaContainer";

export default function DynamicFormComponent({ state, setState, addItem }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 20,
      }}
    >
      <div style={{ flex: 3, marginRight: 20 }}>
        <AvailableActionsContainer
          onClick={addItem}
        ></AvailableActionsContainer>
      </div>

      <div style={{ flex: 4 }}>
        <DroppableAreaContainer
          state={state}
          setState={setState}
        ></DroppableAreaContainer>
      </div>

      <div
        style={{
          flex: 4,
          marginRight: 20,
          marginLeft: 20,
          backgroundColor: Colors.backgroundColor,
        }}
      >
        <GeneratedFormDynamicViewContainer
          state={state}
        ></GeneratedFormDynamicViewContainer>
      </div>
    </div>
  );
}
