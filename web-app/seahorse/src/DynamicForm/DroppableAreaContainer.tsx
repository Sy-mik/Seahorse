import React, { FunctionComponent } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DoppableAreaComponent from './DroppableAreaComponent';

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

interface DroppableAreaContainerProps {
  state: any;
  setState: (any: any) => void;
}

export const DroppableAreaContainer: FunctionComponent<DroppableAreaContainerProps> = ({
  state,
  setState,
}) => {
  function onDragEnd(result: any) {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const items = reorder(state, source.index, destination.index);
    setState(items);

    console.log(state);
  }

  function onActionChanged() {
    setState([...state]);
  }

  function removeItem(itemIndex: number) {
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
};
export default DroppableAreaContainer;
