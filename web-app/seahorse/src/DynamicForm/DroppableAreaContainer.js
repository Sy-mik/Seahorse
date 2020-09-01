import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DoppableAreaComponent from "./DroppableAreaComponent";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
export default function DroppableAreaContainer({ state, setState }) {
  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const items = reorder(state, source.index, destination.index);
    setState(items);
  }

  function onActionChanged() {
    const items = [...state];
    setState(items);
  }

  function removeItem(itemIndex) {
    const newState = [...state];
    newState.splice(itemIndex, 1);
    setState(newState);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DoppableAreaComponent
        state={state}
        ind={1}
        onClick={removeItem}
        onActionChanged={onActionChanged}
      ></DoppableAreaComponent>
    </DragDropContext>
  );
}
