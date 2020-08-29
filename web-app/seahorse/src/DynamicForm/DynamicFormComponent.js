import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DroppableActionContainer from "./DoppableAreaComponent";
import AvailableActionsContainer from "../ActionsPanel/AvailableActionsContainer";
import { v4 as uuidv4 } from "uuid";
import GeneratedFormDynamicViewContainer from "../GeneratedForm/GeneratedFormDynamicViewContainer";
import { Colors } from "../Constants/Theme";
import DroppableAreaContainer from "./DroppableAreaContainer";

export default function DynamicFormContainer({state, setState, addItem}) {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: 20,
      }}
    >
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
      <div style={{ flex: 3 }}>
        <AvailableActionsContainer
          onClick={addItem}
        ></AvailableActionsContainer>
      </div>
    </div>
  );
}
