import React, { FunctionComponent } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import FormActionFactory from './FormActions/helpers/FormActionFactory';

const grid = 10;

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? '#E5E5E5' : '#E5E5E5',
  padding: grid,
  // borderRadius: 15,
  width: 500,
});

interface DroppableAreaComponentProps {
  ind: any;
  state: any[];
  onClick: (any: any) => void;
  onActionChanged: (any: any) => void;
}

export const DroppableAreaComponent: FunctionComponent<DroppableAreaComponentProps> = ({
  ind,
  state,
  onClick,
  onActionChanged,
}) => (
  <Droppable key={ind} droppableId={`${ind}`}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
        {...provided.droppableProps}
      >
        <h3>Builder</h3>
        {state.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
              <FormActionFactory
                onActionChanged={onActionChanged}
                item={item}
                action={item.actionType}
                index={index}
                onDelete={onClick}
                provided={provided}
                snapshot={snapshot}
              />
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default DroppableAreaComponent;
