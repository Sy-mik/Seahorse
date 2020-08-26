import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DroppableActionContainer from "./DoppableActionContainer";
import AvailableActionsContainer from "./AvailableActionsContainer";
import { v4 as uuidv4 } from "uuid";
import GeneratedFormDynamicViewContainer from "../GeneratedForm/GeneratedFormDynamicViewContainer";
import { Colors } from "../Constants/Theme";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function QuoteApp() {
  const [state, setState] = useState([]);

  function onDragEnd(result) {
    const { source, destination } = result;
    console.log(state);
    // dropped outside the list
    if (!destination) {
      return;
    }
    const items = reorder(state, source.index, destination.index);
    onActionChanged();
    setState(items);
  }

  function onActionChanged() {
    setState([...state]);
  }

  function addItem(itemType) {
    const uuid = uuidv4();
    var item = {
      id: uuid,
      actionType: itemType,
    };
    var joined = [...state, item];
    setState([...joined]);
  }
  function removeItem(itemIndex) {
    const newState = [...state];
    newState.splice(itemIndex, 1);
    setState(newState);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // alignItems:''
        padding: 20,
      }}
    >
      <div style={{ flex: 4 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <DroppableActionContainer
            state={state}
            ind={1}
            onClick={removeItem}
            onActionChanged={onActionChanged}
          ></DroppableActionContainer>
        </DragDropContext>
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
